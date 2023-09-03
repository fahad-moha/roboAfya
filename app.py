from flask import Flask, render_template, request, redirect, url_for, session, flash

# Create a Flask web application
app = Flask(__name__)


# Define a route for the root URL
@app.route('/')
def hello_world():
    render_template('index.html')


# Run the application if this file is executed
if __name__ == '__main__':
    app.run()
