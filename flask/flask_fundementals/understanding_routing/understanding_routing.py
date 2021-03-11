from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<words>')
def say(words):
    return f"Hi {words}!"

@app.route('/repeat/<repeats>/<word>')
def repeat(repeats, word):
    repeats = int(repeats)
    return f"{word} " * repeats

if __name__ == "__main__":
    app.run(debug = True)