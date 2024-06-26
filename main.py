from flask import Flask, render_template, request, redirect, session, url_for, json, flash
from src import create_app

app = create_app()

if __name__ == '__main__':
    @app.route('/')
    def homescreen():
        return render_template("index.html")
    app.run(debug=True, host="0.0.0.0")
    