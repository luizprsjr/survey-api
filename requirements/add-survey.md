# Create Survey

> ## Success Case

1. ✅ Receives a **POST** request on the **/api/surveys** route
2. ⛔️ Validates if the request was made by an **admin**
3. ✅ Validates mandatory data: **question** and **answers**
4. ✅ **Creates** a survey with the provided data
5. ✅ Returns **204** with no data

> ## Exceptions

1. ✅ Returns **404** if the API does not exist
2. ⛔️ Returns **403** if the user is not an admin
3. ✅ Returns **400** if question or answers are not provided by the client
4. ✅ Returns **500** if an error occurs while trying to create the survey
