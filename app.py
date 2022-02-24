from flask import Flask
from flask import send_file
import asyncio
from resume import generateResume 

app = Flask(__name__)

async def makeResume():
    await generateResume()
    return 1


@app.route('/download')
def downloadFile ():
    asyncio.set_event_loop(asyncio.new_event_loop())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(makeResume())
    path = "./Resume.pdf"
    return send_file(path, as_attachment=True)
app.run()