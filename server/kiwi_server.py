#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return json.dumps({"name": "kiwiki", "email": "kiwi@kiwi.ki"})


@app.route("/doors")
def get_doors_list():
    return json.dumps({"name": "doors", "count": "100"})


app.run(debug=True)
