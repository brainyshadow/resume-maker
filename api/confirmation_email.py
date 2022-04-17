import smtplib


def sendConfirmationEmail(user, pwd, recipient, templateName):

    FROM = user
    TO = recipient if isinstance(recipient, list) else [recipient]
    SUBJECT = "Template-Upload-Confirmation"
    TEXT = "Thank you for uploading your template to resume-maker. "+templateName + \
        " will be reviewed soon. If it is approved, you should see it on the site soon."

    # Prepare actual message
    message = """From: %s\nTo: %s\nSubject: %s\n\n%s
    """ % (FROM, ", ".join(TO), SUBJECT, TEXT)
    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.ehlo()
        server.starttls()
        server.login(user, pwd)
        server.sendmail(FROM, TO, message)
        server.close()
    except:
        print("There was an error sending the message")
