from flask import Flask

app = Flask(__name__)


@app.route('/<int:number>/')
def incrementer(number):
    return "This is the number entered in the URL " + str(number+1)
@app.route('/<string:name>/')
def hello(name):
    return "This is a string " + name

app.run()