# List Surveys

> ## Success Case

[x] Receives a GET request on the route /api/surveys  
[x] Validates if the request was made by a user  
[x] Returns 204 if there are no surveys  
[x] Returns 200 with the survey data  

> ## Exceptions

[x] Returns error 404 if the API does not exist  
[x] Returns error 403 if it is not a user  
[x] Returns error 500 if there's an error while trying to list the surveys.  