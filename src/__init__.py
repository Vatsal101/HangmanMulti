from flask import Flask, render_template, request, redirect, session, url_for, json, flash
from os import path

def create_app():
    app = Flask(__name__)
  
    from .views import views
    # from .auth import auth


    app.register_blueprint(views, url_prefix='/')
    # app.register_blueprint(auth, url_prefix='/')

    # login_manager = LoginManager()
    # login_manager.login_view = "auth.login"
    # login_manager.init_app(app)
    # login_manager.login_message = "User needs to be logged in to view this page"
    # login_manager.login_message_category = "danger"

    # @login_manager.user_loader
    # def load_user(id):
    #     return User.query.get(int(id))

    return app




