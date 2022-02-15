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

# Give location where text is
# stored which you wish to alter
old_text = soup.find("p", {"id": "qulificationSummary"})
print(old_text)

# Replace the already stored text with
# the new text which you wish to assign
# Replace the already stored text with
# the new text which you wish to assign
new_text = old_text.find(
    text=re.compile('This is where a summary of qualifications will go.'
                    )).replace_with('This is the replacted list of some of my qualifications.')

# Alter HTML file to see the changes done
with open("temp.html", "wb") as f_output:
    f_output.write(soup.prettify("utf-8"))

fileName = "Resume"

try:
    pdfkit.from_file('./templates/template' + str(templateNumber) + '.html', fileName + '.pdf')

except:
    print("An error occured")
os.remove("temp.html")
