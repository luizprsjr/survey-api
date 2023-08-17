# SignUp

> ## Success Case:
[x] Receives a **POST** request at the **/api/signup** route  
[x] Validates required data: **name**, **email**, **password**, and **passwordConfirmation**  
[x] Validates that **password** and **passwordConfirmation** are equal  
[x] Validates that the **email** field is a valid email address  
[ ] Validates if a user with the provided email already exists  
[x] Generates an encrypted password (this password cannot be decrypted)  
[x] Creates an account for the user with the provided data, replacing the password with the encrypted password  
[x] Generates an access token based on the user's ID  
[x] Updates the user's data with the generated access token  
[x] Returns 200 along with the access token  

> ## Exceptions:
[x] Returns 404 error if the API does not exist  
[x] Returns 400 error if **name**, **email**, **password**, or **passwordConfirmation** are not provided by the client  
[x] Returns 400 error if **password** and **passwordConfirmation** are not equal  
[x] Returns 400 error if the **email** field is an invalid email address  
[x] Returns 403 error if the provided email is already in use  
[x] Returns 500 error if an error occurs while trying to generate an encrypted password  
[x] Returns 500 error if an error occurs while trying to create the user's account  
[x] Returns 500 error if an error occurs while trying to generate the access token  
[x] Returns 500 error if an error occurs while trying to update the user with the generated access token  
