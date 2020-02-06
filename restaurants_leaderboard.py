import json

import boto3

from decimal_encoder import DecimalEncoder


def lambda_handler(event, context):
    """
        handler function called by AWS Lambda
    :return: list of restaurant ratings
    """
    client = boto3.resource("dynamodb")
    ratings_table = client.Table("RestaurantsTable")
    response = ratings_table.scan()

    all_restaurant_ratings = json.loads(json.dumps(response["Items"], cls=DecimalEncoder))
    return {
        "statusCode": 200,
        "response": all_restaurant_ratings
    }


if __name__ == "__main__":
    print(lambda_handler("", ""))
