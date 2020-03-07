import nltk
import os
import random as rd
from nltk.corpus import WordNetCorpusReader
import numpy as np
from nltk.stem.lancaster import LancasterStemmer
import tflearn
import tensorflow as tf
import json

data_stemmer = LancasterStemmer()


class TfClassifier():
    def __init__(self):
        self.modelData = 'model.json'

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

        self.main_words = [data_stemmer(w.lower())
                           for w in self.main_words if w not in "!"]
        self.classes = sorted(list(set(self.classes)))
        self.main_words = sorted(list(set(self.main_words)))

    def TrainingTime(self):
        words_storage = []
        training = []
        # init to outout array
        output = [0 for _val in range(len(self.classes))]

        for _x, doc in enumerate(self.main_words):
            # check if the words in non sreamed wors presnt
            side = [data_stemmer(_tem.lower())
                    for _tem in self.main_words_typex]

            for w in self.main_words:
                if w in side:
                    # append for likelihood
                    words_storage.append(1)
                else:
                    words_storage.append(0)

            # create a np.arary for traing
            training = training.append(words_storage)
            output_tem = output
            # only for trainign of the data
            output_tem[self.classes.index(self.main_words_typey[_x])] = 1
            output.append(output_tem)

        output = np.array(output)
        training = np.array(training)

        self.training = training
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
            inputsData, len(self.output), activation='softmax')

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
