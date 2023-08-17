# Login

> ## Success Case:  
[x] Receives a **POST** request at the **/api/login** route  
[x] Validates required data: **email** and **password**  
[x] Validates that the **email** field is a valid email address  
[x] Retrieves the user with the provided email and password  
[x] Generates an access token based on the user's ID  
[x] Updates the user's data with the generated access token  
[x] Returns 200 along with the access token  

> ## Exceptions:  
[x] Returns 404 error if the API does not exist  
[x] Returns 400 error if **email** or **password** are not provided by the client  
[x] Returns 400 error if the **email** field is an invalid email address  
[x] Returns 401 error if no user is found with the provided data  
[x] Returns 500 error if an error occurs while trying to generate the access token  
[x] Returns 500 error if an error occurs while trying to update the user with the generated access token  
