from flask import Flask
from flask import jsonify,Blueprint,request,abort

app = Flask(__name__)
app.Config["DEBUG"] = True

 

