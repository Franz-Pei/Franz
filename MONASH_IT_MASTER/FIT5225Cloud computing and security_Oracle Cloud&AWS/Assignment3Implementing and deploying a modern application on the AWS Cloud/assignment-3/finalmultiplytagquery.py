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
    tag_counts = body.get('tag')
    print(body)
    print(username)
    print(tag_counts)

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

    # Construct the filter expression for each tag count
    filter_expression = Key('username').eq(username)
    for tag, count in tag_counts.items():
        print(tag)
        filter_expression &= Attr('tags').contains({'label': tag})
    
    # Use Boto3 to scan the table and filter items based on conditions
    response = table.scan(
        FilterExpression=filter_expression
    )
    
    # Filter the results to match the exact counts
    matching_items = []
    for item in response['Items']:
        item_tag_counts = {}
        for tag in item['tags']:
            print(type(tag))
            print(tag)
            label = tag["label"]
            if label in item_tag_counts:
                item_tag_counts[label] += 1
            else:
                item_tag_counts[label] = 1
        
        if all(item_tag_counts.get(tag, 0) == count for tag, count in tag_counts.items()):
            matching_items.append(item)

    print(response)
    print(matching_items)
    print(tag_counts)
    print(filter_expression)
    
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
