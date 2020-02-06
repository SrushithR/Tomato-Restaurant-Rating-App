import json
import statistics
import time
from decimal import Decimal

import boto3

from decimal_encoder import DecimalEncoder


def lambda_handler(event, context):
    """
        handler function called by AWS Lambda
    :param event: input passed to the lambda function from the client
    """
    print("input to the lambda function", event)
    client = boto3.resource('dynamodb')
    ratings_table = client.Table("RatingsTable")
    restaurant_table = client.Table("RestaurantsTable")

    ratings_table.put_item(Item={
        "restaurant_id": event["restaurant_id"],
        "restaurant_name": event["restaurant_name"],
        "user_id": event["user_id"],
        "rating": event["rating"],
        "created_at": int(time.time())
    })

    response = ratings_table.query(
        KeyConditionExpression="restaurant_id = :restaurant_id",
        ExpressionAttributeValues={
            ":restaurant_id": event["restaurant_id"]
        },
        ProjectionExpression="rating")

    ratings = json.loads(json.dumps(response["Items"], cls=DecimalEncoder))
    list_of_ratings = [rating['rating'] for rating in ratings]
    avg_rating = statistics.mean(list_of_ratings)

    restaurant_table.update_item(Key={
        "restaurant_id": event["restaurant_id"]
    }, AttributeUpdates={
        "avg_rating": {
            "Value": Decimal(str(avg_rating))
        }
    })

    return {
        "statusCode": 200
    }


if __name__ == "__main__":
    event = {
        "restaurant_name": "Ruchi restaurant",
        "restaurant_id": "123",
        "user_id": "98789",
        "rating": 2
    }
    print(lambda_handler(event, ""))
