import AmazonCognitoIdentity from "amazon-cognito-identity-js";
export const signIn = async (Username, Password) => {
  const authenticationData = {
    Username, // your username here
    Password
  };
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );
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
        reject(err.message || JSON.stringify(err));
      }
    });
  });
};
