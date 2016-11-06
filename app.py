# !usr/bin/python
# -*- coding: utf-8 -*-

from flask import Flask, render_template, make_response

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/qgis_repository")
def qgis_repository():
    repository = make_response(render_template("qgis_repository.xml"))
    repository.headers["Content-Type"] = "application/xml"
    return repository


@app.route("/qgisplugin_spreadsheet")
def qgisplugin_spreadsheet():
    return app.send_static_file('repository/qgisplugin_spreadsheet.zip')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
