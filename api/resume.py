import pdfkit
from bs4 import BeautifulSoup as bs

import os

import re
import json
import io

# Open the HTML in which you want to make changes


async def generateResume(passedJson):

    # Parse the json data sent by the client.
    jsonData = json.loads(passedJson)

    # Remove the last segment of the path
    base = os.path.dirname(os.path.abspath(__file__))

    templateNumber = jsonData["Template Id"]

    # Open the HTML in which you want to make changes
    html = open(
        os.path.join(base,
                     './templates/template' + str(templateNumber) + '.html'))

    html_doc = '<!DOCTYPE html> <html>   <head>     <link rel="preconnect" href="https://fonts.googleapis.com" />     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />     <link       href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;400&display=swap"       rel="stylesheet"     />     <link rel="preconnect" href="https://fonts.googleapis.com" />     <link rel="preconnect" href="https://fonts.googleapis.com" />     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />     <link       href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@300&display=swap"       rel="stylesheet"     />     <title>Page Title</title>     <style>       html,       body {         margin: 0;         padding: 0;       }       .full-width {         width: 100%;         table-layout: fixed;       }       .third-width {         text-align: left;         width: 33%;       }       .two-third-width {         text-align: left;         width: 66%;       }       .divider {         text-align: left;         width: 1%;       }       .vl {         position: absolute;         border-left: 2px solid #a9a9a9;         height: 100%;       }       .text-container {         margin: 1rem auto 0.2rem auto;         width: 85%;       }       .text-container-no-margin {         margin: 0 auto 0 auto;         width: 85%;       }        .resume-name {         font-family: "Montserrat", sans-serif;         font-size: 1.5rem;       }       .resume-title {         font-family: "Montserrat", sans-serif;         font-size: 1.2rem;       }       .resume-content {         font-family: "Lato", sans-serif;         font-size: 1rem;         font-weight: 100;       }       .fixed-third-width {         margin: 0;         width: 33%;         position: absolute;       }       .sub-content {         width: 85%;         margin: auto;       }     </style>   </head>   <body>     <table class="full-width">       <tr>         <th class="two-third-width">           <div class="text-container" style="margin-top: 2rem">             <h2 class="resume-title">SUMMARY OF QUALIFICATIONS</h2>             <hr />           </div>         </th>         <th class="third-width">           <div class="vl"></div>           <div class="text-container" style="margin-top: 2rem">             <h2 id="name" class="resume-name">NAME</h2>             <hr />           </div>         </th>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="qulificationSummary" class="resume-content">               This is where a summary of qualifications will go.             </p>           </div>         </td>         <td class="third-width">           <div class="text-container">             <p id="occupation" class="resume-content">Education/Occupation</p>             <p id="region" class="resume-content">City, State/Province</p>             <p id="email" class="resume-content">Email</p>           </div>         </td>       </tr>       <tr>         <th class="two-third-width">           <div class="text-container">             <h2 class="resume-title">WORK EXPERIENCE</h2>             <hr />           </div>         </th>         <th class="third-width">           <div class="vl"></div>           <div class="text-container-no-margin">             <h2 class="resume-title">SKILLS</h2>             <hr />           </div>           <div class="fixed-third-width">             <table class="sub-content">               <tr>                 <th>                   <p id="first-skill-section" class="resume-content">                     Skill Section One                   </p>                 </th>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p class="resume-content" id="first-skill-one">                     First Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="first-skill-two" class="resume-content">                     Second Skills                   </p>                 </td>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p id="first-skill-three" class="resume-content">                     Third Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="first-skill-four" class="resume-content">                     Fourth Skills                   </p>                 </td>               </tr>             </table>              <hr style="width: 85%" />              <table class="sub-content">               <tr>                 <th>                   <p id="second-skill-section" class="resume-content">                     Skill Section Two                   </p>                 </th>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p class="resume-content" id="second-skill-one">                     First Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="second-skill-two" class="resume-content">                     Second Skills                   </p>                 </td>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p id="second-skill-three" class="resume-content">                     Third Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="second-skill-four" class="resume-content">                     Fourth Skills                   </p>                 </td>               </tr>             </table>              <hr style="width: 85%" />              <table class="sub-content">               <tr>                 <th>                   <p id="third-skill-section" class="resume-content">                     Skill Section Three                   </p>                 </th>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p class="resume-content" id="third-skill-one">                     First Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="third-skill-two" class="resume-content">                     Second Skills                   </p>                 </td>               </tr>               <tr>                 <td style="width: 50%; text-align: center">                   <p id="third-skill-three" class="resume-content">                     Third Skills                   </p>                 </td>                 <td style="width: 50%; text-align: center">                   <p id="third-skill-four" class="resume-content">                     Fourth Skills                   </p>                 </td>               </tr>             </table>           </div>         </th>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="jobeOneName" class="resume-content">Job Name</p>             <p id="jobOne" class="resume-content">First Job.</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="jobeTwoName" class="resume-content">Job Name</p>             <p id="jobTwo" class="resume-content">Second Job.</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="jobeThreeName" class="resume-content">Job Name</p>             <p id="jobThree" class="resume-content">Third Job.</p>           </div>         </td>       </tr>       <tr>         <th class="two-third-width">           <div class="text-container">             <h2 class="resume-title">INDEPENDENT PROJECTS</h2>             <hr />           </div>         </th>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="projectOne" class="resume-content">Project one</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="projectTwo" class="resume-content">Project two</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="projectThree" class="resume-content">Project three</p>           </div>         </td>       </tr>       <tr>         <th class="two-third-width">           <div class="text-container">             <h2 class="resume-title">HOBBIES AND ACADEMICS</h2>             <hr />           </div>         </th>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="hobbyOne" class="resume-content">Hobby one</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="hobbyTwo" class="resume-content">Hobby two</p>           </div>         </td>       </tr>       <tr>         <td class="two-third-width">           <div class="text-container">             <p id="hobbyThree" class="resume-content">Hobby three</p>           </div>         </td>       </tr>     </table>   </body> </html> '

    # Parse HTML file in Beautiful Soup
    soup = bs(html_doc, 'html.parser')

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
    jobTwoDescription = jsonData["jobTwoDescription"]
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

    # Replace Region
    old_text = soup.find("p", {"id": "region"})
    new_text = old_text.find(
        text=re.compile('City, State/Province')).replace_with(region)

    # Replace Email
    old_text = soup.find("p", {"id": "email"})
    new_text = old_text.find(text=re.compile('Email')).replace_with(email)

    # Replace first skill
    old_text = soup.find("p", {"id": "first-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section One')).replace_with(skillSectionOne)

    # Replace second skill
    old_text = soup.find("p", {"id": "second-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section Two')).replace_with(skillSectionTwo)

    # Replace third skill section
    old_text = soup.find("p", {"id": "third-skill-section"})
    new_text = old_text.find(
        text=re.compile('Skill Section Three')).replace_with(skillSectionThree)

    # Replace first skill
    old_text = soup.find("p", {"id": "first-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillOne)

    # Replace second skill
    old_text = soup.find("p", {"id": "first-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillOne)

    # Replace third skill
    old_text = soup.find("p", {"id": "first-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillOne)

    # Replace fourth skill
    old_text = soup.find("p", {"id": "first-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillOne)

    # Replace first skill
    old_text = soup.find("p", {"id": "second-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillTwo)

    # Replace second skill
    old_text = soup.find("p", {"id": "second-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillTwo)

    # Replace third skill
    old_text = soup.find("p", {"id": "second-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillTwo)

    # Replace fourth skill
    old_text = soup.find("p", {"id": "second-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillTwo)

    # Replace first skill
    old_text = soup.find("p", {"id": "third-skill-one"})
    new_text = old_text.find(
        text=re.compile('First Skills')).replace_with(firstSkillThree)

    # Replace second skill
    old_text = soup.find("p", {"id": "third-skill-two"})
    new_text = old_text.find(
        text=re.compile('Second Skills')).replace_with(secondSkillThree)

    # Replace third skill
    old_text = soup.find("p", {"id": "third-skill-three"})
    new_text = old_text.find(
        text=re.compile('Third Skills')).replace_with(thirdSkillThree)

    # Replace fourth skill
    old_text = soup.find("p", {"id": "third-skill-four"})
    new_text = old_text.find(
        text=re.compile('Fourth Skills')).replace_with(fourthSkillThree)

    # Replace job one name
    old_text = soup.find("p", {"id": "jobeOneName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobOneName)

    # Replace the job one description
    old_text = soup.find("p", {"id": "jobOne"})
    new_text = old_text.find(
        text=re.compile('First Job.')).replace_with(jobOneDescription)

    # Replace the job two name
    old_text = soup.find("p", {"id": "jobeTwoName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobTwoName)

    # Replace the job two description
    old_text = soup.find("p", {"id": "jobTwo"})
    new_text = old_text.find(
        text=re.compile('Second Job.')).replace_with(jobTwoDescription)

    # Replace the job two name
    old_text = soup.find("p", {"id": "jobeThreeName"})
    new_text = old_text.find(
        text=re.compile('Job Name')).replace_with(jobThreeName)

    # Replace the job three description
    old_text = soup.find("p", {"id": "jobThree"})
    new_text = old_text.find(
        text=re.compile('Third Job.')).replace_with(jobThreeDescription)

    # Replace the first porject
    old_text = soup.find("p", {"id": "projectOne"})
    new_text = old_text.find(
        text=re.compile('Project one')).replace_with(projectOne)

    # Replace the second porject
    old_text = soup.find("p", {"id": "projectTwo"})
    new_text = old_text.find(
        text=re.compile('Project two')).replace_with(projectTwo)

    # Replace the second porject
    old_text = soup.find("p", {"id": "projectThree"})
    new_text = old_text.find(
        text=re.compile('Project three')).replace_with(projectThree)

    # Replace the job two description
    old_text = soup.find("p", {"id": "hobbyOne"})
    new_text = old_text.find(
        text=re.compile('Hobby one')).replace_with(hobbyOne)

    # Replace the job two description
    old_text = soup.find("p", {"id": "hobbyTwo"})
    new_text = old_text.find(
        text=re.compile('Hobby two')).replace_with(hobbyTwo)

    # Replace the job two description
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
