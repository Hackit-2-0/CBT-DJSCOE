from flask import Flask, jsonify, redirect
from nltk.stem import LancasterStemmer
from nltk.corpus import WordNetCorpusReader

app = Flask(__name__)


if __name__ == "__name__":
    app.run(devug=True, port=5000)
