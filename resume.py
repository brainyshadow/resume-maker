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
skills = input("Enter a breif summary of your skills:\n")
technicalSkills = input("Enter some of your Technical Skills:\n")
softSkills = input("Enter some of your soft skills:\n")

jobOne = input("Enter some info about your first job:\n")

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

old_text = soup.find("p", {"id": "softSkills"})
new_text = old_text.find(
    text=re.compile('For example here is where soft skils can be put.'
                    )).replace_with(softSkills)

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