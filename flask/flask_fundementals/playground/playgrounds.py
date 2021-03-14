from flask import Flask, render_template
app = Flask(__name__)

@app.route('/play')
def blueBox():
    return render_template('playgrounds1_index.html')

@app.route('/play/<boxes>')
def blueBoxRepeat(boxes):
    boxInt = int(boxes)
    return render_template("playgrounds2_index.html", box = boxInt)

@app.route('/play/<boxes>/<color>')
def colorBoxRepeat(boxes, color):
    boxInt = int(boxes)
    return render_template("playgrounds3_index.html", box = boxInt, boxColor = color)

if __name__=="__main__":
    app.run(debug=True)