import smtplib
# Import modules
import smtplib
import ssl
# email.mime subclasses
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
# The pandas library is only for generating the current date, which is not necessary for sending emails
import pandas as pd


def sendConfirmationEmail(user, pwd, recipient, templateName):

    # Define the HTML document
    html = '''
        <html>
            <body>
                <h1>Thank you for submitting ''' + templateName+'''</h1>
                <p>Your template will be reviewed shortly. If it is approved, your tempalte will display on our site.</p>
            </body>
        </html>
        '''

    # Set up the email addresses and password. Please replace below with your email address and password
    email_from = user
    password = pwd
    email_to = recipient

    # Create a MIMEMultipart class, and set up the From, To, Subject fields
    email_message = MIMEMultipart()
    email_message['From'] = email_from
    email_message['To'] = email_to
    email_message['Subject'] = "resume-raker tempalte submission"

    # Attach the html doc defined earlier, as a MIMEText html content type to the MIME message
    email_message.attach(MIMEText(html, "html"))
    # Convert it as a string
    email_string = email_message.as_string()

    # Connect to the Gmail SMTP server and Send Email
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(email_from, password)
        server.sendmail(email_from, email_to, email_string)
