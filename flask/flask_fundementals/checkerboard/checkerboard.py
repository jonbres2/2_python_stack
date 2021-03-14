from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def eightByEight():
    return render_template('eight_by_eight.html')

@app.route('/<rows>')
def eightByCustom(rows):
    rowInt = int(rows)
    return render_template('eight_by_custom.html', rowCount = rowInt)

@app.route('/<columns>/<rows>/')
def customBoard(columns, rows):
    columnInt = int(columns)
    rowInt = int(rows)
    return render_template("custom_board.html", columnCount = columnInt, rowCount = rowInt)

if __name__=="__main__":
    app.run(debug=True)