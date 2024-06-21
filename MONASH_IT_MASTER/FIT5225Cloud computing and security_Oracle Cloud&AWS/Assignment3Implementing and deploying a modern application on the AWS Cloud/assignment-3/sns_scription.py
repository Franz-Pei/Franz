import json
import boto3

# Initialize SNS client
sns_client = boto3.client('sns')

dynamodb = boto3.resource("dynamodb")
TABLE_NAME = "preferences"

# Replace this with your SNS topic ARN
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:346457447264:group77'

def lambda_handler(event, context):
    print(event)
    try:
        # Parse the request body
        body = json.loads(event['body'])

        # Extract data from the parsed body
        tag = body.get('tag')
        email = body.get('email')
        username = body.get('username')
        table = dynamodb.Table(TABLE_NAME)

        if not tag or not email or not username:
            raise ValueError("Missing required parameters")

        # Check if the email is already subscribed
        response = sns_client.list_subscriptions_by_topic(TopicArn=SNS_TOPIC_ARN)
        subscriptions = response.get('Subscriptions', [])
        
        subscribed = False
        subscription_arn = None
        
        # for sub in subscriptions:
        #     print(sub)
        #     if sub['Endpoint'] == email:
        #         subscribed = True
        #         subscription_arn = sub['SubscriptionArn']
        #         break

        filter_policy = {}
        for sub in subscriptions:
            print(sub)
            if sub['Endpoint'] == email:
                subscribed = True
                subscription_arn = sub['SubscriptionArn']
                response = sns_client.get_subscription_attributes(
                    SubscriptionArn = subscription_arn
                )
                current_filter_policy_json = response.get('Attributes', {}).get('FilterPolicy', '{}')
                current_filter_policy = json.loads(current_filter_policy_json)
                current_filter_policy['tag'].append(tag)
                filter_policy = current_filter_policy
                break

        if not subscribed:
            # Subscribe the email to the SNS topic
            response = sns_client.subscribe(
                TopicArn=SNS_TOPIC_ARN,
                Protocol='email',
                Endpoint=email,
                ReturnSubscriptionArn=True
            )
            subscription_arn = response['SubscriptionArn']
            print(f"Subscribed {email} to SNS topic {SNS_TOPIC_ARN}")

            # Set the filter policy for the subscription
            filter_policy = {
                "username": [username],
                "tag": [tag]
            }

        sns_client.set_subscription_attributes(
            SubscriptionArn=subscription_arn,
            AttributeName='FilterPolicy',
            AttributeValue=json.dumps(filter_policy)
        )
        
        print(table.put_item(Item = {"username": username, "preferred_tags": filter_policy['tag']}))
        print(f"Set filter policy for {email} to {filter_policy}")

        # Publish the message to the SNS topic
        message = f"Hello {username},\n\nA new image has been recognized with the tag: {tag}."
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
                    'StringValue': tag
                }
            }
        )

        print(f"Email sent to {email} with tag {tag}")

        return {
            'statusCode': 200,
            'body': json.dumps('Email sent successfully'),
            'headers': {
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": '*',
                "Access-Control-Allow-Headers": '*'
            }
        }
    
    except Exception as e:
        print(f"Error: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps(f"Error: {str(e)}")
        }
