from flask import Flask
from flask import jsonify,Blueprint,request,abort
import json 
app = Flask(__name__)
app.Config["DEBUG"] = True

with open('./chat/intents.json' , 'rb') as file:
    data = json.load(file) 

print(data)