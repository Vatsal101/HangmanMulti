from flask import Flask, Blueprint, render_template, session, redirect, url_for, request, flash, make_response
#from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/game')
def game():
    return render_template("game.html")
