import json
import boto3
import base64
import numpy as np
import cv2
from boto3.dynamodb.conditions import Key, Attr
import object_detection

# Initialize DynamoDB resource
dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "images"

def lambda_handler(event, context):
    try:
        # Parse the request body to get the base64-encoded image
        body = json.loads(event['body'])
        username = body.get('username')
        base64_image = body.get('file')


        if not base64_image:
            return {
                'statusCode': 400,
                'body': json.dumps('Bad request, missing image data.'),
                'headers': {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    "Access-Control-Allow-Headers": '*'
                }
            }


        print(username)
        print(type(base64_image))

        tags = object_detection.transfer_base64(base64_image)

        print(tags)


        tags = [tag["label"] for tag in tags]
        print(tags)


        if not username or not tags or not isinstance(tags, list):
            return {
                'statusCode': 400,
                'body': json.dumps('Bad request, missing username or tags or tags is not a list.'),
                'headers': {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    "Access-Control-Allow-Headers": '*'
                }
            }
    
        # Get the DynamoDB table
        table = dynamodb.Table(TABLE_NAME)
    
        # Construct the filter expression for each tag
        filter_expression = Key('username').eq(username)
        for tag in tags:
            filter_expression &= Attr('tags').contains(tag)
    
        # Use Boto3 to scan the table and filter items based on conditions
        response = table.scan(
            FilterExpression=filter_expression
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

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error processing image: {str(e)}'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }
        
        
        
        
        
        
        
        