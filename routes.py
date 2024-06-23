from flask import render_template, request, redirect, url_for
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    field = request.form['field']
    
    print(f"Form submitted: Name={name}, Email={email}, Field={field}")
    
    # Redirect to success page with Slack invite link
    return redirect(url_for('success'))

@app.route('/success')
def success():
    slack_invite_link = "https://join.slack.com/t/globalimpacthub/shared_invite/zt-2laies0au-E6c7XciKYkmeIMcVpAulkg"
    return render_template('success.html', slack_invite_link=slack_invite_link)
