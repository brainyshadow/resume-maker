import pdfkit
from bs4 import BeautifulSoup as bs

import os

import re

# Remove the last segment of the path
base = os.path.dirname(os.path.abspath(__file__))

templateNumber = 1

# Open the HTML in which you want to make changes
html = open(
    os.path.join(base, './templates/template' + str(templateNumber) + '.html'))

# Parse HTML file in Beautiful Soup
soup = bs(html, 'html.parser')

name = input("Please Enter your name:\n")
qualifications = input("Please enter a summary of your qualifications:\n")
currectOccupation = input(
    "Please enter enter your education or current occupation:\n")
region = input("Enter your City and State or Province:\n")
email = input("Enter your email:\n")
skills = input("Enter a brief summary of your skills:\n")
technicalSkills = input("Enter some of your Technical Skills:\n")
softSkills = input("Enter some of your soft skills:\n")
jobOneName = input("Enter enter the name and location of your first job:\n")
jobOneDescription = input("Enter a brief summary of your first job:\n")
jobTwoName = input("Enter enter the name and location of your second job:\n")
jobTwoDescripton = input("Enter a brief summary of your second job:\n")
jobThreeName = input("Enter enter the name and location of your third job:\n")
jobThreeDescription = input("Enter a brief summary of your third job:\n")
hobbyOne = input("Enter a brief summary of your first hobby:\n")
hobbyTwo = input("Enter a brief summary of your second hobby:\n")
hobbyThree = input("Enter a brief summary of your third hobby:\n")

# Replace Name
old_text = soup.find("h2", {"id": "name"})
new_text = old_text.find(text=re.compile('NAME')).replace_with(name.upper())

# Replace Qualifications
old_text = soup.find("p", {"id": "qulificationSummary"})
new_text = old_text.find(
    text=re.compile('This is where a summary of qualifications will go.'
                    )).replace_with(qualifications)

# Replace Occupation
old_text = soup.find("p", {"id": "occupation"})
new_text = old_text.find(
    text=re.compile('Education/Occupation')).replace_with(currectOccupation)

#Replace Region
old_text = soup.find("p", {"id": "region"})
new_text = old_text.find(
    text=re.compile('City, State/Province')).replace_with(region)

#Replace Email
old_text = soup.find("p", {"id": "email"})
new_text = old_text.find(text=re.compile('Email')).replace_with(email)

#Replace first skill
old_text = soup.find("p", {"id": "skills"})
new_text = old_text.find(text=re.compile(
    'This is where the user inputted skills will go.')).replace_with(skills)

#Replace first skill
old_text = soup.find("p", {"id": "technicalSkills"})
new_text = old_text.find(
    text=re.compile('For example here is where technical skills can be put.'
                    )).replace_with(technicalSkills)

#Replace soft skills
old_text = soup.find("p", {"id": "softSkills"})
new_text = old_text.find(
    text=re.compile('For example here is where soft skils can be put.'
                    )).replace_with(softSkills)

#Replace job one name
old_text = soup.find("p", {"id": "jobeOneName"})
new_text = old_text.find(text=re.compile('Job Name')).replace_with(jobOneName)

#Replace the job one description
old_text = soup.find("p", {"id": "jobOne"})
new_text = old_text.find(
    text=re.compile('First Job.')).replace_with(jobOneDescription)

#Replace the job two name
old_text = soup.find("p", {"id": "jobeTwoName"})
new_text = old_text.find(text=re.compile('Job Name')).replace_with(jobTwoName)

#Replace the job two description
old_text = soup.find("p", {"id": "jobTwo"})
new_text = old_text.find(
    text=re.compile('Second Job.')).replace_with(jobTwoDescripton)

#Replace the job two name
old_text = soup.find("p", {"id": "jobeThreeName"})
new_text = old_text.find(
    text=re.compile('Job Name')).replace_with(jobThreeName)

#Replace the job two description
old_text = soup.find("p", {"id": "jobThree"})
new_text = old_text.find(
    text=re.compile('Third Job.')).replace_with(jobThreeDescription)

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