import json
import base64
import uuid
import os
import cv2
import numpy as np
import boto3

FOLDER = "images/"
RESIZED_FOLDER = "resized/"
s3 = boto3.client('s3')
BUCKET = "fit5225a3-group77"
WIDTH = 100

def lambda_handler(event, context):
   # Read the incoming body
   data = json.loads(event['body'])
   username = data['username']
   name = data['name']
   image = data['file']

   print("Image name: " + name)
   _, suffix = os.path.splitext(name)
   id = uuid.uuid1()
   # Create image name
   key = FOLDER + username + "/" + str(id.hex) + suffix
   decoded = base64.b64decode(image)
   nparr = np.asarray(bytearray(decoded), np.uint8)
   img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
   height = int(img.shape[0] * (WIDTH / img.shape[1]))
   # Resize the image
   resized_img = cv2.resize(img, (WIDTH, height), interpolation=cv2.INTER_AREA)
   # Get the image suffix
   _, buffer = cv2.imencode(suffix, resized_img)
   resized_img_bytes = buffer.tobytes()
   # Set the new image name
   resized_img_key = RESIZED_FOLDER + username + "/" + str(id.hex) + suffix
   # Upload the image to S3
   s3.put_object(Bucket=BUCKET, Key=key, Body=decoded, ContentType="image/jpeg", ContentDisposition='inline')
   # Upload the resized image to S3
   s3.put_object(Bucket=BUCKET, Key=resized_img_key, Body=resized_img_bytes, ContentType="image/jpeg", ContentDisposition='inline')

   return {
       'statusCode': 200,
       'body': json.dumps('Image uploaded and resized successfully!'),
       'headers': {
           "Access-Control-Allow-Origin": '*',
           "Access-Control-Allow-Methods": '*',
           "Access-Control-Allow-Headers": '*'
       }
   }

# Sample input
# {"file": "dvgaibhbtyguhndf", "username":"test", "name":"123.jpg"}