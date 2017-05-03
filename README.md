# API

**Show last added offers**
----
  Returns json data about a 5 last added offers.

* **URL**

  /

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

    **Content:** `{ cat : [{name: 'name', shortName: 'shortName'}, {name: 'name', shortName: 'shortName'}], offers : [{title: 'title', ShortDescription: 'short', description: 'desc', imgUrl: 'localhost:3000/assets/pn1.png', email: 'test@test.ru'}] }`
 
* **Error Response:**

  None

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
**Register**
----
  Register new user.

* **URL**

  /account/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
 
   `username=[string]`
   `email=[string]`
   `password=[string]`

* **Success Response:**

    {error: false}
 
* **Error Response:**

    {error: true}
    
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/account/register",
      dataType: "json",
      data: {username: 'str', email: 'email', password: 'qert'},
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  **Login**
----
  Auth user.

* **URL**

  /account/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
 
   `username=[string]`
   `password=[string]`

* **Success Response:**

    {username: 'example'}
 
* **Error Response:**

    {error: true}
    
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/account/register",
      dataType: "json",
      data: {username: 'str', password: 'qert'},
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
    **Verify token**
----
  Verify confirmation email token.

* **URL**

  /account/verify/:token

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `token=[string]`

* **Data Params**

  None

* **Success Response:**

    {success: 'verification-success'}
 
* **Error Response:**

    {error: 'verification-failure'}
    
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/account/verify/123abc",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
