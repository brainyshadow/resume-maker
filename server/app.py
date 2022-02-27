from flask import send_file, request, Flask
from flask_cors import CORS, cross_origin
import asyncio
from resume import generateResume


app = Flask(__name__)
cors = CORS(app)
app.config['Access-Control-Allow-Origin'] = 'http://localhost:3000'


async def makeResume(argument):
    await generateResume(argument)
    return 1


@app.route('/download', methods=['POST'])
@cross_origin()
def downloadFile():
    content = request.data
    asyncio.set_event_loop(asyncio.new_event_loop())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(makeResume(content))
    loop.stop()
    path = "./Resume.pdf"
    return send_file(path, as_attachment=True)


app.run()