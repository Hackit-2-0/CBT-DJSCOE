import nltk
import os
import random as rd
from nltk.corpus import WordNetCorpusReader
import numpy as np
from nltk.stem.lancaster import LancasterStemmer
import tflearn
import tensorflow as tf
import json


class TfClassifier():
    def __init__(self):
        self.modelData = 'model.json'
        self.data_stemmer = LancasterStemmer()


# load the model

    def Model_check(self):
        with open(self.modelData, 'rb') as model:
            data = json.load(model)
            self.rawData = data
            self.finalData = data['intents']

    def GetData(self):
        self.classes = []
        self.main_words = []
        self.main_words_typex = []
        self.main_words_typey = []
        for _labels in self.finalData:
            self.classes.append(_labels['classes'])

        for main_wordss in self.finalData:
            for questions in main_wordss['questions']:
                words = nltk.word_tokenize(questions)

                self.main_words.extend(words)
                self.main_words_typex.append(words)
                self.main_words_typey.append(main_wordss['classes'])

        self.classes = sorted(list(set(self.classes)))
        self.main_words = sorted(list(set(self.main_words)))

        print(self.main_words_typex)

    def TrainingTime(self):
        traing = []
        output = []
        out_empty = [0 for _val in range(len(self.classes))]
        # include the word_tokenize() data
        for x, doc in enumerate(self.main_words_typex):
            word_bag = []
            # stem the word_tokenize data
            wrds = [self.data_stemmer.stem(w) for w in doc]

            for w in self.main_words:
                if w in wrds:
                    word_bag.append(1)
                    # word  is same as stemmed outputs
                else:
                    word_bag.append(0)

            output_row = out_empty[:]
            output_row[self.classes.index(self.main_words_typey[x])] = 1

            traing.append(word_bag)
            output.append(output_row)

        traing = np.array(traing)
        output = np.array(output)
        self.training = traing
        self.output = output
        # stem the output

    def train(self):
        # 40 nuerons
        tf.reset_default_graph()
        inputsData = tflearn.input_data(shape=[None, len(self.training[0])])
        inputsData = tflearn.fully_connected(inputsData, 10)
        inputsData = tflearn.fully_connected(inputsData, 10)
        inputsData = tflearn.fully_connected(inputsData, 10)
        inputsData = tflearn.fully_connected(
            inputsData, len(self.output[0]), activation='softmax')

        inputsData = tflearn.regression(inputsData)
        self.model = tflearn.DNN(inputsData)
        self.model.fit(self.training, self.output, n_epoch=4000,
                       batch_size=10, show_metric=True)
        self.model.save('dataflowModel.tflearn')


consfig = TfClassifier()
consfig.Model_check()
consfig.GetData()
consfig.TrainingTime()
consfig.train()
