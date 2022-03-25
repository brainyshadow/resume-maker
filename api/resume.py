import pdfkit
from bs4 import BeautifulSoup as bs

import os

import re
import json


# Open the HTML in which you want to make changes
async def generateResume(passedJson):

    jsonData = json.loads(passedJson)

    # Remove the last segment of the path
    base = os.path.dirname(os.path.abspath(__file__))

    templateNumber = jsonData["Template Id"]

    # Open the HTML in which you want to make changes
    html = open(
        os.path.join(base,
                     './templates/template' + str(templateNumber) + '.html'))

    # Parse HTML file in Beautiful Soup
    soup = bs(html, 'html.parser')

    name = jsonData["name"]
    qualifications = jsonData["qualifications"]
    currentOccupation = jsonData["currentOccupation"]
    region = jsonData["region"]
    email = jsonData["email"]

    skillSectionOne = jsonData["skillSectionOne"]
    firstSkillOne = jsonData["firstSkillOne"]

    secondSkillOne = jsonData["secondSkillOne"]
    thirdSkillOne = jsonData["thirdSkillOne"]
    fourthSkillOne = jsonData["fourthSkillOne"]

    skillSectionTwo = jsonData["skillSectionTwo"]
    firstSkillTwo = jsonData["firstSkillTwo"]
    secondSkillTwo = jsonData["secondSkillTwo"]
    thirdSkillTwo = jsonData["thirdSkillTwo"]
    fourthSkillTwo = jsonData["fourthSkillTwo"]

    skillSectionThree = jsonData["skillSectionThree"]
    firstSkillThree = jsonData["firstSkillThree"]
    secondSkillThree = jsonData["secondSkillThree"]
    thirdSkillThree = jsonData["thirdSkillThree"]
    fourthSkillThree = jsonData["fourthSkillThree"]

    jobOneName = jsonData["jobOneName"]
    jobOneDescription = jsonData["jobOneDescription"]
    jobTwoName = jsonData["jobTwoName"]
    jobTwoDescripton = jsonData["jobTwoDescripton"]
    jobThreeName = jsonData["jobThreeName"]
    jobThreeDescription = jsonData["jobThreeDescription"]
    hobbyOne = jsonData["hobbyOne"]
    hobbyTwo = jsonData["hobbyTwo"]
    hobbyThree = jsonData["hobbyThree"]

    projectOne = jsonData["projectOne"]
    projectTwo = jsonData["projectTwo"]
    projectThree = jsonData["projectThree"]

    # Replace Name
    old_text = soup.find("h2", {"id": "name"})
    new_text = old_text.find(text=re.compile('NAME')).replace_with(
        name.upper())

    # Replace Qualifications
    old_text = soup.find("p", {"id": "qulificationSummary"})
    new_text = old_text.find(
        text=re.compile('This is where a summary of qualifications will go.'
                        )).replace_with(qualifications)

    # Replace Occupation
    old_text = soup.find("p", {"id": "occupation"})
    new_text = old_text.find(text=re.compile(
        'Education/Occupation')).replace_with(currentOccupation)

    #Replace Region
    old_text = soup.find("p", {"id": "region"})
    new_text = old_text.find(
        text=re.compile('City, State/Province')).replace_with(region)

    #Replace Email
    old_text = soup.find("p", {"id": "email"})
    new_text = old_text.find(text=re.compile('Email')).replace_with(email)

    #Replace first skill
    old_text = soup.find("p", {"id": "first-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section One')).replace_with(skillSectionOne)

    #Replace second skill
    old_text = soup.find("p", {"id": "second-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section Two')).replace_with(skillSectionTwo)

    #Replace third skill section
    old_text = soup.find("p", {"id": "third-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section Three')).replace_with(skillSectionThree)

    #Replace first skill
    old_text = soup.find("p", {"id": "first-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillOne)

    #Replace second skill
    old_text = soup.find("p", {"id": "first-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillOne)

    #Replace third skill
    old_text = soup.find("p", {"id": "first-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillOne)

    #Replace fourth skill
    old_text = soup.find("p", {"id": "first-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillOne)

    #Replace first skill
    old_text = soup.find("p", {"id": "second-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillTwo)

    #Replace second skill
    old_text = soup.find("p", {"id": "second-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillTwo)

    #Replace third skill
    old_text = soup.find("p", {"id": "second-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillTwo)

    #Replace fourth skill
    old_text = soup.find("p", {"id": "second-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillTwo)

    #Replace first skill
    old_text = soup.find("p", {"id": "third-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillThree)

    #Replace second skill
    old_text = soup.find("p", {"id": "third-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillThree)

    #Replace third skill
    old_text = soup.find("p", {"id": "third-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillThree)

    #Replace fourth skill
    old_text = soup.find("p", {"id": "third-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillThree)

    #Replace job one name
    old_text = soup.find("p", {"id": "jobeOneName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobOneName)

    #Replace the job one description
    old_text = soup.find("p", {"id": "jobOne"})
    new_text = old_text.find(
        text=re.compile('First Job.')).replace_with(jobOneDescription)

    #Replace the job two name
    old_text = soup.find("p", {"id": "jobeTwoName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobTwoName)

    #Replace the job two description
    old_text = soup.find("p", {"id": "jobTwo"})
    new_text = old_text.find(
        text=re.compile('Second Job.')).replace_with(jobTwoDescripton)

    #Replace the job two name
    old_text = soup.find("p", {"id": "jobeThreeName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobThreeName)

    #Replace the job three description
    old_text = soup.find("p", {"id": "jobThree"})
    new_text = old_text.find(
        text=re.compile('Third Job.')).replace_with(jobThreeDescription)

    #Replace the first porject
    old_text = soup.find("p", {"id": "projectOne"})
    new_text = old_text.find(
        text=re.compile('Project one')).replace_with(projectOne)

    #Replace the second porject
    old_text = soup.find("p", {"id": "projectTwo"})
    new_text = old_text.find(
        text=re.compile('Project two')).replace_with(projectTwo)

    #Replace the second porject
    old_text = soup.find("p", {"id": "projectThree"})
    new_text = old_text.find(
        text=re.compile('Project three')).replace_with(projectThree)

    #Replace the job two description
    old_text = soup.find("p", {"id": "hobbyOne"})
    new_text = old_text.find(
        text=re.compile('Hobby one')).replace_with(hobbyOne)

    #Replace the job two description
    old_text = soup.find("p", {"id": "hobbyTwo"})
    new_text = old_text.find(
        text=re.compile('Hobby two')).replace_with(hobbyTwo)

    #Replace the job two description
    old_text = soup.find("p", {"id": "hobbyThree"})
    new_text = old_text.find(
        text=re.compile('Hobby three')).replace_with(hobbyThree)

    # Alter HTML file to see the changes done
    with open("temp.html", "wb") as f_output:
        f_output.write(soup.prettify("utf-8"))

    fileName = "Resume"

    options = {
        'page-size':
        'Letter',
        'margin-top':
        '0.25in',
        'margin-right':
        '0in',
        'margin-bottom':
        '0.25in',
        'margin-left':
        '0in',
        'encoding':
        "UTF-8",
        'custom-header': [('Accept-Encoding', 'gzip')],
        'cookie': [
            ('cookie-name1', 'cookie-value1'),
            ('cookie-name2', 'cookie-value2'),
        ],
        'outline-depth':
        10,
    }

    try:
        pdfkit.from_file('temp.html', fileName + '.pdf', options=options)

    except:
        print("An error occured")
    os.remove('temp.html')