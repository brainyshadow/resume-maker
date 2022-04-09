from curses.ascii import HT
from pickle import FALSE
from flask import send_file, request, Flask
from flask_cors import CORS, cross_origin
import asyncio
from sqlalchemy import false, true
import json
from resume import generateResume
import os
from decouple import config

app = Flask(__name__)
cors = CORS(app)
app.config['Access-Control-Allow-Origin'] = 'http://localhost:3000'

async def makeResume(argument):
    await generateResume(argument)
    return 1

# route for generating a resume


@app.route('/download', methods=['POST'])
@cross_origin()
def downloadFile():
    content = request.data
    token = request.headers.get('reCAPTCHA-Token')
    if(True):  # Verify Token
        # the resume function is async and must be waited for
        asyncio.set_event_loop(asyncio.new_event_loop())
        loop = asyncio.get_event_loop()
        loop.run_until_complete(makeResume(content))
        loop.stop()
        path = "./Resume.pdf"
        try:
            return send_file(path, as_attachment=True)
        finally:
            os.remove("Resume.pdf")
        # route for adding custom template
    else:
        return "Incorrect Token", 401


@app.route('/uploadtemplate', methods=['POST'])
@cross_origin()
def uploadTemplate():
    content = request.data
    jsonData = json.loads(content)
    tempalteName = jsonData["name"]
    tempalteDescription = jsonData["description"]
    userEmail = jsonData["email"]
    HTML = jsonData["HTML"]
    print(tempalteName, tempalteDescription, userEmail, HTML)
    return "", 200


app.run()
