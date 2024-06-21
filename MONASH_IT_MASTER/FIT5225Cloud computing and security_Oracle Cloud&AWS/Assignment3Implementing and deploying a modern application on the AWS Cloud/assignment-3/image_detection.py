import json
import object_detection
import os
import boto3


# Initialize AWS resources
dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "images"
RESIZED_TABLE_NAME = "resized"
prefered_table_name = "preferences"
s3_client = boto3.client("s3")
sns_client = boto3.client('sns')


# Replace this with your SNS topic ARN
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:920361656072:group77'


def lambda_handler(event, context):
    for record in event["Records"]:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        
        # Retrieve the image from S3
        image = s3_client.get_object(Bucket=bucket, Key=key)
        tags = object_detection.readBytes(image['Body'].read())
        
        print("tags：{}".format(tags))
        
        # Extract relevant information
        table = dynamodb.Table(TABLE_NAME)
        parts = key.split('/')
        username = parts[1]
        tags_json = json.dumps(tags)
        
        # Save to DynamoDB
        print(table.put_item(Item={
            "username": username,
            "key": key,
            "tags": tags_json
        }))
        
        # Extract small table relevant information
        small_table = dynamodb.Table(RESIZED_TABLE_NAME)
        if key.startswith("images"):
            key2 = key.replace("images", "resized")
        # parts = key.split('/')
        # username = parts[1]
        tags_json = json.dumps(tags)
        
        # Save to DynamoDB
        print(small_table.put_item(Item={
            "username": username,
            "key": key2,
            "tags": tags_json
        }))
        
        # Extract label for SNS message attribute
        # label = tags[0].get('label')
        preferred_tags = get_preferred_tags(username)
        print(f"user {username}'s subscribed tags are{preferred_tags}")
        labels = []
        preferred_labels = []
        if tags:
            for tag in tags:
                label = tag.get('label')
                labels.append(label)
                if label in preferred_tags:
                    preferred_labels.append(label)
        print(f"preferred_labels: {preferred_labels}")
        if preferred_labels:
            for label in preferred_labels:
            # Publish the message to the SNS topic
                message = f"Hello \n\nA new image has been recognized with the label: {label}. \n imagename is {key}"
                sns_client.publish(
                    TopicArn=SNS_TOPIC_ARN,
                    Message=message,
                    Subject="New Image Recognition Result",
                    MessageAttributes={
                        'username': {
                            'DataType': 'String',
                            'StringValue': username
                        },
                        'tag': {
                            'DataType': 'String',
                            'StringValue': label
                        }
                    }
                )


                print(f"Notification sent for {key} with label {label}")


    return {
        'statusCode': 200,
        'body': json.dumps('Process completed successfully')
    }

def get_preferred_tags(username):
    table = dynamodb.Table(prefered_table_name)
    response = table.get_item(
        Key = {
            "username":username
        }
    )
    print(f"preference table:")
    print(response)
    tags = response["Item"]["preferred_tags"]
    print(tags)
    print(type(tags))
    for tag in tags:
        print(tag)
    return tags