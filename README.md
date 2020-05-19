# Simple REST Bagus Library Book
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<div align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</div>

## Structur Folder
```
\---src
|    \---Configs
|    |   +---db.js            
|    \---Controller
|    |   +---books.js
|    |   +---category.js
|    |   +---loan.js
|    |   +---user.js
|    \---helpers
|    |   +---books.js
|    \---models
|    |   +---books.js
|    |   +---category.js
|    |   +---loan.js
|    |   +---user.js
|    \---routers
|    |   +---books.js
|    |   +---category.js
|    |   +---index.js
|    |   +---loan.js
|    |   +---user.js
+---app.js
```
## How to Install

1. Clone this repository

   ```
   $ git clone https://github.com/ichvanul/LibraryWeb-Backend-ExpressJs-NodeJs.git
   ```

2. Create a database and import file to database sql.

3. Install all depedencies on the package.json

   ```
   $ npm install
   ```

4. Create `.env` file with environment variable in line with following:

   ```
   SERVER_PORT = 1000 (example)
   DB_HOST = "localhost"
   DB_USER = "your-user"
   DB_PASS = "your-password"
   DB_NAME = "your-database"
   PRIVATE_KEY = "your-private-key"
   URL = "http://localhost:3000/" (example)
   ```

5. Run
   ```
   $ npm start
   ```

## Related Project

- [`VueJs-Library`](https://github.com/bagakibadi/VueJs-Library)

### License
----

© [Bagus Nur Solayman](https://github.com/bagakibadi/)

MyEmail : solaybagus2@gmail.com
