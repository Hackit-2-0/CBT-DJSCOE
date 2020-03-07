from flask import Flask
from flask import jsonify,Blueprint,request,abort
import json 

app = Flask(__name__)
app.config["DEBUG"] = True

with open('D:/DJSCE/CBT-DJSCOE/server/models/chat/intents.json' , 'rb') as file:
    data = json.load(file) 

@app.route("/" , methods=['GET'])
def home():
    return '''<h2>DJSCE - Chatbot</h2>'''

@app.route('/add',methods=['POST'])
def add_intents():
    if not request.json or not 'id' in request.json:
        abort(400)
    intent = {
        'id': data[-1]['id'] + 1,
        'tag': request.json['tag'],
        'patterns': request.json.get('patterns'),
        'responses': request.json.get('responses'),
        'context_set': request.json.get('context_set')
    }
    
    data.append(intent)
    return jsonify(data),201

if __name__=='__main__':
    app.run()