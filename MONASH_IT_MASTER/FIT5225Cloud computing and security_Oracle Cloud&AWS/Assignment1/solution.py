from flask import Flask, request, jsonify, json
import object_detection


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>This program is developed by Ziqi Pei for FIT5225 2024 S1 Assignment 1!</h1>"

# get user input for detection and return result
@app.route('/api/transfer', methods=['POST'])
def transfer():
    data = request.get_json()
    id = data['id']
    img_base64 = data["image"]
    res = object_detection.transfer_base64(img_base64)
    print("The process id: {}".format(id))
    return jsonify({"id": id, "objects": res})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', threaded=True, port=5000)