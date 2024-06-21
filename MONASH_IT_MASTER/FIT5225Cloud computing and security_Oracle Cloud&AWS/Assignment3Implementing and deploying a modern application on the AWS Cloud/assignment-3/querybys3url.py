import json
import boto3
from boto3.dynamodb.conditions import Key

# Initialize DynamoDB resource
dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "images"

def lambda_handler(event, context):
   # Parse request body
   body = json.loads(event['body'])
   username = body.get('username')
   s3url = body.get('s3url')

   if not username or not s3url:
       return {
           'statusCode': 400,
           'body': json.dumps('Bad request, missing username or s3url.'),
           'headers': {
               "Access-Control-Allow-Origin": '*',
               "Access-Control-Allow-Methods": '*',
               "Access-Control-Allow-Headers": '*'
           }
       }

   # Remove the "s3://fit5225a3-group77/" part
   if s3url.startswith("s3://fit5225a3-group77/"):
       s3url = s3url.replace("s3://fit5225a3-group77/", "")

   # Get the DynamoDB table
   table = dynamodb.Table(TABLE_NAME)

   # Use Boto3 to query the table for data matching the username and s3url
   response = table.query(
       KeyConditionExpression=Key('username').eq(username) & Key('key').eq(s3url)
   )

   # Return the query result
   return {
       'statusCode': 200,
       'body': json.dumps(response['Items']),
       'headers': {
           "Access-Control-Allow-Origin": '*',
           "Access-Control-Allow-Methods": '*',
           "Access-Control-Allow-Headers": '*'
       }
   }


