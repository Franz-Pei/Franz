import json
import boto3

# Initialize DynamoDB resource
dynamodb = boto3.resource("dynamodb")
SMALL_TABLE_NAME = "resized"
TABLE_NAME = "images"

def lambda_handler(event, context):
    # Parse request body
    body = json.loads(event['body'])
    username = body.get('username')
    image_name_main = body.get('key').replace("resized", "Images")
    image_name_resized = body.get('key')
    tag_to_delete = body.get('tag')

    if not username or not image_name_main or not image_name_resized or not tag_to_delete:
        return {
            'statusCode': 400,
            'body': json.dumps('Bad request, missing username, key, or tag.'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }

    # Get the DynamoDB table
    table = dynamodb.Table(TABLE_NAME)
    small_table = dynamodb.Table(SMALL_TABLE_NAME)

    try:
        # Get the current tags from the main table
        response = table.get_item(
            Key={
                'username': username,
                'key': image_name_main
            }
        )
        
        if 'Item' not in response:
            return {
                'statusCode': 404,
                'body': json.dumps('Image not found in main table.'),
                'headers': {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    "Access-Control-Allow-Headers": '*'
                }
            }
        
        current_tags = json.loads(response['Item']['tags'])

        # Get the current tags from the resized table
        small_response = small_table.get_item(
            Key={
                'username': username,
                'key': image_name_resized
            }
        )
        
        if 'Item' not in small_response:
            return {
                'statusCode': 404,
                'body': json.dumps('Image not found in resized table.'),
                'headers': {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    "Access-Control-Allow-Headers": '*'
                }
            }
        
        current_small_tags = json.loads(small_response['Item']['tags'])

        # Remove the tag from the main tags
        updated_tags = [tag for tag in current_tags if tag['label'] != tag_to_delete]
        
        # Remove the tag from the resized tags  
        updated_small_tags = [tag for tag in current_small_tags if tag['label'] != tag_to_delete]

        # Use Boto3 to update the tags in the main table
        response = table.update_item(
            Key={
                'username': username,
                'key': image_name_main
            },
            UpdateExpression="set tags = :t",
            ExpressionAttributeValues={
                ':t': json.dumps(updated_tags)
            },
            ReturnValues="UPDATED_NEW"
        )
        
        # Use Boto3 to update the tags in the resized table
        small_response = small_table.update_item(
            Key={
                'username': username,
                'key': image_name_resized
            },
            UpdateExpression="set tags = :t",
            ExpressionAttributeValues={
                ':t': json.dumps(updated_small_tags)
            },
            ReturnValues="UPDATED_NEW"
        )

        # Return the update result
        return {
            'statusCode': 200,
            'body': json.dumps({
                'main_table_update': response['Attributes'],
                'resized_table_update': small_response['Attributes']
            }),
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
