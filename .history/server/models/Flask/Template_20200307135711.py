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

@app.route('/add' , methods=['POST'])
def add():
     if not request.json or not 'name' in request.json:
            abort(400)
    poke = {
        'id': pokemon[-1]['id'] + 1,
        'name': request.json['name'],
        'number': request.json.get('number'),
        'type1': request.json.get('type1'),
        'type2': request.json.get('type2',None),
        'species': request.json.get('species', ""),
    }

    pokemon.append(poke)
    return jsonify(pokemon),201

if __name__ == '__main__':
    app.run()