/*
A confirmed user signs in to obtain a session.
The session contains an ID token, an access token, and a refresh token,
we are picking the ID token in this case,
as it will play a part when we integrate API Gateway
in combination with Cognito 👀.
*/

global.fetch = require('node-fetch');

const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const signIn = async (Username, Password) => {
    const authenticationData = {
      Username, // your username here
      Password
    };
    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );
    const poolData = {
        UserPoolId: "us-east-1_qCNOrtVNz",
        ClientId: "3rcp1ggq24nftrvahu3fav1t2d"
    };
    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const userData = {
      Username,
      Pool: userPool
    };
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          const idToken = result.getIdToken().getJwtToken();
          resolve(idToken);
        },
        onFailure: err => {
          reject(err.message || JSON.stringify(err))
        }
      });
    });
  };

signIn("Srushith", "mypassword")
.then(result => console.log(result))
.catch(err => console.log(err));

