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
    tag_counts = body.get('tag')

    if not username or not tag_counts or not isinstance(tag_counts, dict):
        return {
            'statusCode': 400,
            'body': json.dumps('Bad request, missing username or tag counts or tag counts is not a dictionary.'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }

    # Get the DynamoDB table
    table = dynamodb.Table(TABLE_NAME)

    # Scan the table to retrieve all items for the given username
    response = table.scan(
        FilterExpression=Key('username').eq(username)
    )
    
    # Further filter the results to match the exact counts
    matching_items = []
    for item in response['Items']:
        item_tag_counts = {}
        tags = json.loads(item['tags'])  # Parse the JSON string in the tags field
        for tag in tags:
            label = tag['label']
            if label in item_tag_counts:
                item_tag_counts[label] += 1
            else:
                item_tag_counts[label] = 1
        
        if all(item_tag_counts.get(tag, 0) >= count for tag, count in tag_counts.items()):
            matching_items.append(item)



    # Return the query result
    return {
        'statusCode': 200,
        'body': json.dumps(matching_items),
        'headers': {
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Methods": '*',
            "Access-Control-Allow-Headers": '*'
        }
    }
