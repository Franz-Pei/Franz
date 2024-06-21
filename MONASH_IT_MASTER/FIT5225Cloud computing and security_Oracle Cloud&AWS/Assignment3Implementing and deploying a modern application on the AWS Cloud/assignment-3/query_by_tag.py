import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

# Initialize DynamoDB resource
dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "images"

def lambda_handler(event, context):
   # Parse request body
   body = json.loads(event['body'])
   username = body.get('username')
   tag = body.get('tag')

   if not username or not tag:
       return {
           'statusCode': 400,
           'body': json.dumps('Bad request, missing username or tag.'),
           'headers': {
               "Access-Control-Allow-Origin": '*',
               "Access-Control-Allow-Methods": '*',
               "Access-Control-Allow-Headers": '*'
           }
       }

   # Get the DynamoDB table
   table = dynamodb.Table(TABLE_NAME)

   # Use Boto3 to scan the table and filter items based on conditions
   response = table.scan(
       FilterExpression=Key('username').eq(username) & Attr('tags').contains(tag)
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