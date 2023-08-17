# Create Survey

> ## Success Case

[x] Receives a **POST** request on the **/api/surveys** route  
[x] Validates if the request was made by an **admin**  
[x] Validates mandatory data: **question** and **answers**  
[x] **Creates** a survey with the provided data  
[x] Returns **204** with no data  

> ## Exceptions

[x] Returns **404** if the API does not exist  
[x] Returns **403** if the user is not an admin  
[x] Returns **400** if question or answers are not provided by the client  
[x] Returns **500** if an error occurs while trying to create the survey  
