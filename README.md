# express-practice-sankofa

## Directions
You are to make a simple "Add people into a Sankofa class". This is a full CRUD application. You will code your back-end in `app.js` and we can view all of our data through `Postman` or browser. 


## Your code must meet the following requirements:

## Steps

### Set Up
  * fork and clone down this repo.
  * `npm init` to create a `Node.js` project.
  * Add dependencies. Install express, nodemon, eslint
      - `npm install express cors nodemon`
  * In your `package.json`, add a start script that will start your back-end server with the nodemon command, `"start" : "nodemon app.js"`.
  * In your `app.js` file, `require('express')` and use it to create an express server and have it listen to an available port on your computer.
  * Run `npm start` to start your express server.
  

## Create our data
 * We want to have file that holds our data separate from the `app.js`. 
 * We need to first create our own starter data. Let's first add our amazing instructors.
  ```
  const sankofa = [
    {
        id: 1,
        name: "Jowel Rosario",
        age: "28",
        occupation: "instructor"
    },
    {
        id: 2,
        name: "Ana Reyes",
        age: "28",
        occupation: "Program Manager"
    },
    {
        id: 3,
        name: "Caston Boyd",
        age: "32",
        occupation: "instructor"
    },
];
  ```
* Now that we have our data initiated inside of the file, how can we use this data in our `app.js`?

## Get all Fellows
 * Add a `GET /fellows` route to your express server that will return the list of Sankofa fellows as a JSON response. 
 * This assignment is strictly backend, we can view our results in our `http://localhost:3000/` or in POSTMAN.  
 * (Potential issue) You may notice that you get a cors error if you open up your console. To fix this error, `require('cors')` package we installed earlier and have your express app use it as middleware (e.g. `app.use(cors());`). After adding it, you should no longer get a cors error.
 
 
 
