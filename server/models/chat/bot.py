import nltk
import os
import random as rd
from nltk.corpus import WordNetCorpusReader
import numpy as np
from nltk.stem.lancaster import LancasterStemmer
import tflearn
import json

data_stemmer = LancasterStemmer()


class TfClassifier():
    def __init__(self):
        self.modelData = 'model.json'
        with open('model.json', 'rb') as model:
            self.model = json.loads(self.modelData)
