# Login

> ## Success Case:  
✅ Receives a **POST** request at the **/api/login** route  
✅ Validates required data: **email** and **password**  
✅ Validates that the **email** field is a valid email address  
✅ Retrieves the user with the provided email and password  
✅ Generates an access token based on the user's ID  
✅ Updates the user's data with the generated access token  
✅ Returns 200 along with the access token  

> ## Exceptions:  
✅ Returns 404 error if the API does not exist  
✅ Returns 400 error if **email** or **password** are not provided by the client  
✅ Returns 400 error if the **email** field is an invalid email address  
✅ Returns 401 error if no user is found with the provided data  
✅ Returns 500 error if an error occurs while trying to generate the access token  
✅ Returns 500 error if an error occurs while trying to update the user with the generated access token  
