# Tomato-Restaurant-Rating-App

![Deployment](https://github.com/SrushithR/Tomato-Restaurant-Rating-App/workflows/Deploy%20master%20branch/badge.svg)

A restaurant rating app completely built on serverless using AWS!

Slide deck for the workshop - https://www.slideshare.net/SrushithR/serverless-workshop-tomato-restaurant-rating-app

Application - Technical Description:
The application will present users with an HTML & JS based user interface for rating restaurant. The interface on the backend with a RESTful web service will submit the request and update the database. The application will also provide facilities for users to register into the application before rating.

The application architecture uses S3 hosts static web resources including HTML, CSS, JavaScript, and image files which are loaded in the user's browser. JavaScript executed in the browser sends and receives data from a backend API built using Lambda and API Gateway. Amazon Cognito provides user management and authentication functions to secure the backend API. Finally, DynamoDB provides a persistence layer where data can be stored by the API's Lambda function.

Pre-requisites:
AWS Account: In order to complete this workshop you'll need an AWS Account with access to create AWS IAM, S3, DynamoDB, Lambda, API Gateway and Cognito resources. All of the resources you will launch as part of this workshop are eligible for the AWS free tier if your account is less than 12 months old. See the AWS Free Tier page for more details.

Essential JavaScript, HTML/CSS & Python knowledge: The front-end used JS and HTML/CSS and the backend code is written in Python; hence working knowledge is needed on these languages for this workshop.

### Architecture
<p align = "center"> <img src = "https://user-images.githubusercontent.com/23396903/73653526-56573b80-46af-11ea-93ed-5ff07526649e.png"> </img> </p>

The workshop covers the following topics:

### Agenda
* Getting Started with Serverless Development
    Essentials of serverless development
    Introduction to the essential AWS services used in this workshop and how they relate to each other: AWS Lambda, Amazon API Gateway, Amazon S3, Amazon DynamoDB and Amazon Cognito.
    Hands-on: Clone the GitHub repo for the "Tomato Restaurant Rating” application

* Static Website Hosting
How to use S3 for static website hosting
Hands-on: Create an S3 bucket, upload content, add a bucket policy to allow public reads, and enable website hosting; validate the hosted website

* User Management
How to perform user authentication and registration with Amazon Cognito User Pools
Hands-on: Create an Amazon Cognito user pool, add an application client, updating the Config.js file in your website bucket, and validate the implementation.

* Serverless Service Backend
How to use AWS Lambda, and Amazon DynamoDB to build a backend process for handling requests from your web application.
Hands-on: Create DynamoDB table, create an IAM role for the lambda and step functions, create lambdas for handing requests; validate implementation

* RESTful APIs with AWS Lambda and Amazon API Gateway
How to use API Gateway to expose the created lambdas as RESTful APIs.
Hands-on: Create a new REST API, create a Cognito User Pools Authorizer, create a new resource and method, deploy your API, update the website config; validate the implementation.

* Putting things together and next steps
How to test the implementation
How to monitor the application, logging, debugging, etc
Wrap-up and key takeaways


## Resources:
1. Lambda performance tuning - https://github.com/alexcasalboni/aws-lambda-power-tuning
2. Connecting Cognito with API Gateway - https://medium.com/@awskarthik82/part-1-securing-aws-api-gateway-using-aws-cognito-oauth2-scopes-410e7fb4a4c0
3. The guy to follow for NoSQL DB design - https://twitter.com/houlihan_rick
4. AWS Lambda under the hood: ReInvent talk - https://www.youtube.com/watch?v=xmacMfbrG28
5. Optimizing your serverless applications - https://www.youtube.com/watch?v=5rMiq-jw1Ig
6. Understanding DynamoDB on-demand pricing - https://serverless.com/blog/dynamodb-on-demand-serverless/
7. Datadog blog post - https://www.datadoghq.com/state-of-serverless/
8. Links to all of my other presentations - https://www.slideshare.net/SrushithR/
 