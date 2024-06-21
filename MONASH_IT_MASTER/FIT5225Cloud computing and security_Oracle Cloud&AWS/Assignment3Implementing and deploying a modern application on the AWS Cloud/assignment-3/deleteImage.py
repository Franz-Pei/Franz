import json
import boto3
from boto3.dynamodb.conditions import Key

# Initialize DynamoDB resource
dynamodb = boto3.resource("dynamodb")
SMALL_TABLE_NAME = "resized"
TABLE_NAME = "images"
s3_client = boto3.client("s3")
BUCKET_NAME = "fit5225a3-group77"

def lambda_handler(event, context):
    # Parse request body
    body = json.loads(event['body'])
    print(f"body:{body}")
    username = body.get('username')
    print(1)
    image_name_main = body.get('key').replace("resized", "images")
    print(f"image_name_main: {image_name_main}")
    image_name_resized = body.get('key')
    print(f"image_name_resized: {image_name_resized}")
    
    if not username or not image_name_main or not image_name_resized:
       return {
            'statusCode': 400,
            'body': json.dumps('Bad request, missing username or image keys.'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }

    # Get the DynamoDB tables
    table = dynamodb.Table(TABLE_NAME)
    small_table = dynamodb.Table(SMALL_TABLE_NAME)

    try:
        # Delete the image from the main table
        response = table.delete_item(
            Key={
                'username': username,
                'key': image_name_main
            }
        )
        print(2)
        print(f"message to delete main image from dynamodb:{response}")
        

        s3_main_response = s3_client.delete_object(
            Bucket = BUCKET_NAME,
            Key = image_name_main
        )   
        print(3)       
        print(f"message to delete main image from S3:{s3_main_response}")


        # Delete the image from the resized table
        small_response = small_table.delete_item(
            Key={
                'username': username,
                'key': image_name_resized
            }
        )
        print(4)
        print(f"message to delete resized image from dynamodb:{small_response}")


        s3_resized_response = s3_client.delete_object(
            Bucket = BUCKET_NAME,
            Key = image_name_resized
        )
        print(5)
        print(f"message to delete resized image from S3:{s3_resized_response}")



        # Return the deletion result
        return {
            'statusCode': 200,
            'body': json.dumps('Items deleted successfully.'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(f'Failed to delete items: {str(e)}'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
       }
