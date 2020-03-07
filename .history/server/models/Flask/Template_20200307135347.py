from flask import Flask
from flask import jsonify,Blueprint,request,abort
import json 

app = Flask(__name__)
app.config["DEBUG"] = True

with open('D:/DJSCE/CBT-DJSCOE/server/models/chat/intents.json' , 'rb') as file:
    data = json.load(file) 

print(data)

if '__name__' == '__main__':
    app.run()