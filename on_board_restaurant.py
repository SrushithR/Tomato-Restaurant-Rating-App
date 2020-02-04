import uuid

import boto3


def lambda_handler(event, context):
    """
        handler function called by AWS Lambda
    :param event: input passed to the lambda function from the UI
    """
    print("input to the lambda function", event)
    client = boto3.resource('dynamodb', region_name="us-west-2")
    table = client.Table("RestaurantsTable")

    response = table.put_item(Item={
        'restaurant_id': str(uuid.uuid4()),
        'restaurant_name': event["restaurant_name"]
    })
    print(response)
    return {
        "statusCode": 200
    }


if __name__ == "__main__":
    event = {
        "restaurant_name": "Ruchi restaurant"
    }
    print(lambda_handler(event, ""))
