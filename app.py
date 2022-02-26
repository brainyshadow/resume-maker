from flask import send_file, request, Flask
import asyncio
from resume import generateResume 

app = Flask(__name__)

async def makeResume(argument):
    await generateResume(argument)
    return 1

@app.route('/download', methods=['POST'])
def downloadFile ():
    content = request.data
    asyncio.set_event_loop(asyncio.new_event_loop())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(makeResume(content))
    path = "./Resume.pdf"
    return send_file(path, as_attachment=True)

app.run()