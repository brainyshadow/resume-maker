from flask import send_file, request, Flask
import asyncio
from resume import generateResume 
import json

app = Flask(__name__)

async def makeResume():
    await generateResume()
    return 1

@app.route('/download', methods=['POST'])
def downloadFile ():
    content = json.loads(request.data)
    json_formatted_str = json.dumps(content, indent=2)

    asyncio.set_event_loop(asyncio.new_event_loop())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(makeResume())
    path = "./Resume.pdf"
    return send_file(path, as_attachment=True)
app.run()