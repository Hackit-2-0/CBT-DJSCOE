from flask import Flask
from flask import jsonify, Blueprint, request, abort
from nltk.corpus import WordNetCorpusReader
from nltk.stem.lancaster import LancasterStemmer
# from .models.chat.chat import RestServerreply
import json
from classification import RestServerreply

app = Flask(__name__)


@app.route('/client', methods=['POST'])
def Home():
    data = request.get_json()
    data = data['msg']
    output = RestServerreply(data)
    return jsonify(output)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
