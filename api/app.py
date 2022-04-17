from curses.ascii import HT
from http import server
from pickle import FALSE
from flask import send_file, request, Flask, jsonify
from flask_cors import CORS, cross_origin
import asyncio
from jinja2 import TemplateSyntaxError
from sqlalchemy import false, true
import json
from resume import generateResume
from confirmation_email import sendConfirmationEmail
import os
from decouple import config
import requests
from pymongo import MongoClient


app = Flask(__name__)
cors = CORS(app)
app.config['Access-Control-Allow-Origin'] = 'http://localhost:3000'
conn_str = config('conn_str')
client = MongoClient(conn_str, serverSelectionTimeoutMS=5000)
db = client['RESUMEMAKER']
templateCollection = db["ResumeTemplates"]


async def makeResume(template, argument):
    await generateResume(template, argument)
    return 1
# route for generating a resume


@app.route('/gettemplate', methods=['GET'])
@cross_origin()
def getTemplate():
    recaptchaKey = config('recaptchaKey')
    recaptchaAPIkey = config('API_KEY')
    projectId = config('projectId')
    token = request.headers.get('reCAPTCHA-Token')
    exceptedAction = "getTemplate"
    response = requests.post(
        "https://recaptchaenterprise.googleapis.com/v1beta1/projects/"+projectId+"/assessments?key="+recaptchaAPIkey, json={
            "event": {
                "token": token,
                "siteKey": recaptchaKey,
                "expectedAction": exceptedAction
            }
        }
    )
    score = response.json()["score"]
    action = response.json()["tokenProperties"]["action"]
    if(score > 0.5 and action == exceptedAction):
        # the resume function is async and must be waited for
        cursor = templateCollection.find({"Approved": True}, {
                                         "_id": 0, "TemplateID": 1, "TempalteName": 1, "TemplateDescription": 1,  "DownloadCount": 1}).limit(25)
        list_cur = list(cursor)
        templates = list_cur
        templatesArray = []
        for template in templates:
            template["previewUrl"] = "https://storage.googleapis.com/resume-maker-template/template" + \
                str(template["TemplateID"]) + ".jpg"
            templatesArray.append(template)
        return jsonify(templatesArray), 200
    else:
        return "Invalid Token", 401


@app.route('/download', methods=['POST'])
@cross_origin()
def downloadFile():
    content = request.data
    parsedRequestBody = json.loads(content)
    templateId = int(parsedRequestBody["Template Id"])

    cursor = templateCollection.find({"TemplateID": templateId}).limit(1)
    list_cur = list(cursor)
    template = list_cur[0]
    aprovalStatus = template["Approved"]
    if(aprovalStatus):
        HTML = template["HTML"]
        downloadCount = template["DownloadCount"]
        documentId = template["_id"]
        templateCollection.update_one(
            {"_id": documentId}, {"$set": {"DownloadCount": downloadCount+1}})

        recaptchaKey = config('recaptchaKey')
        recaptchaAPIkey = config('API_KEY')
        projectId = config('projectId')

        token = request.headers.get('reCAPTCHA-Token')
        exceptedAction = "generateResume"
        response = requests.post(
            "https://recaptchaenterprise.googleapis.com/v1beta1/projects/"+projectId+"/assessments?key="+recaptchaAPIkey, json={
                "event": {
                    "token": token,
                    "siteKey": recaptchaKey,
                    "expectedAction": exceptedAction
                }
            }
        )
        score = response.json()["score"]
        action = response.json()["tokenProperties"]["action"]
        if(score > 0.5 and action == exceptedAction):
            # the resume function is async and must be waited for
            asyncio.set_event_loop(asyncio.new_event_loop())
            loop = asyncio.get_event_loop()
            loop.run_until_complete(makeResume(HTML, content))
            loop.stop()
            path = "./Resume.pdf"
            try:
                return send_file(path, as_attachment=True)
            finally:
                os.remove("Resume.pdf")
            # route for adding custom template
        else:
            return "Invalid Token", 401
    else:
        return "Invalid Template Id", 400


@app.route('/uploadtemplate', methods=['POST'])
@cross_origin()
def uploadTemplate():
    recaptchaKey = config('recaptchaKey')
    recaptchaAPIkey = config('API_KEY')
    projectId = config('projectId')
    content = request.data
    token = request.headers.get('reCAPTCHA-Token')

    exceptedAction = "uploadTemplate"
    response = requests.post(
        "https://recaptchaenterprise.googleapis.com/v1beta1/projects/"+projectId+"/assessments?key="+recaptchaAPIkey, json={
            "event": {
                "token": token,
                "siteKey": recaptchaKey,
                "expectedAction": exceptedAction
            }
        }
    )
    score = response.json()["score"]
    action = response.json()["tokenProperties"]["action"]
    if(score > 0.5 and action == exceptedAction):
        content = request.data
        jsonData = json.loads(content)
        tempalteName = jsonData["TemplateName"]
        tempalteDescription = jsonData["TemplateDescription"]

        cursor = templateCollection.find().sort("TemplateID", -1).limit(1)

        list_cur = list(cursor)

        template = list_cur[0]
        recentTemplate = template["TemplateID"]
        newTemplateId = recentTemplate + 1
        HTML = jsonData["HTML"]
        userEmail = jsonData["Email"]
        templateCollection.insert_one({"TemplateID": newTemplateId, "TempalteName": tempalteName,
                                      "TemplateDescription": tempalteDescription, "HTML": HTML, "Approved": False, "DownloadCount": 0, "UserEmail": userEmail})
        email = config('email')
        password = config('password')
        sendConfirmationEmail(email, password, userEmail, tempalteName)
        print("Valid")
        return "", 200
    else:
        print("Invalid")
        return "Invalid Token", 401


app.run()
