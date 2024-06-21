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
   imageName = body.get('key')
   newTag = body.get('newTag')

   if not username or not imageName or not newTag:
       return {
           'statusCode': 400,
           'body': json.dumps('Bad request, missing username, key, or newTag.'),
           'headers': {
               "Access-Control-Allow-Origin": '*',
               "Access-Control-Allow-Methods": '*',
               "Access-Control-Allow-Headers": '*'
           }
       }

   # Get the DynamoDB table
   table = dynamodb.Table(TABLE_NAME)

   try:
       # Get the current tags
       response = table.get_item(
           Key={
               'username': username,
               'key': imageName
           }
       )

       if 'Item' not in response:
           return {
               'statusCode': 404,
               'body': json.dumps('Image not found.'),
               'headers': {
                   "Access-Control-Allow-Origin": '*',
                   "Access-Control-Allow-Methods": '*',
                   "Access-Control-Allow-Headers": '*'
               }
           }

       current_tags = json.loads(response['Item']['tags'])

       # Update the tag
       current_tags['label'] = newTag

       # Use Boto3 to update the tags
       response = table.update_item(
           Key={
               'username': username,
               'key': imageName
           },
           UpdateExpression="set tags = :t",
           ExpressionAttributeValues={
               ':t': json.dumps(current_tags)
           },
           ReturnValues="UPDATED_NEW"
       )

       # Return the update result
       return {
           'statusCode': 200,
           'body': json.dumps(response['Attributes']),
           'headers': {
               "Access-Control-Allow-Origin": '*',
               "Access-Control-Allow-Methods": '*',
               "Access-Control-Allow-Headers": '*'
           }
       }

   except Exception as e:
       return {
           'statusCode': 500,
           'body': json.dumps(f'Failed to update item: {str(e)}'),
           'headers': {
               "Access-Control-Allow-Origin": '*',
               "Access-Control-Allow-Methods": '*',
               "Access-Control-Allow-Headers": '*'
           }
       }