//* Personal Checklist - Glonel

//TODO Check if package.json is present. 
//* If yes, run npm install
    //* double check the package.json has express installed. 
    //* If yes, you're all set.
    //* Otherwise, run npm install express
//* If not, run npm init --yes
    //* Then run npm install express

//TODO Under package.json/scripts, check to see if "start" is present.
//* Make sure it looks like this: "start": "node server/server.js"
    //* If it is not present, make it present.
    //* This will allow the terminal to run server with: npm start
    //* instead of using: node server/server.js

//TODO USING AXIOS.
//* Inside public HTML file, above your script src for the client.js, 
//* make sure that the script src for the axios library is sourced. 
//* Use this code to get it sourced:
//* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

//TODO make .gitignore file
//* If you don't see one, make sure you have a .gitignore file in the main folder
//* alongside your package.json and node_modules
    //* within that folder, make sure that you include:
    //* node_modules/
    //* .DS_Store

//TODO Setting Up the Server in server.js
//* This is going to be the code you will copy and make sure is 
//* present in ALL projects regarding servers for localhost:5001 at least.
/*
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 5001; */

//* We will require the router here after creating the router.js file, 
//* exported from server/routes/file_name.router.js.
//* This file path might look a little different depending on your file/folder structure.
//* e.g const numbersRouter = require('./routes/numbers.router.js');
/*
    const route_nameRouter = require('./routes/file_name.router.js');
*/

    //!This app.use will allow req.body to be used. IMPORTANT
 /* app.use(express.json());
 */

 //* This is where we define the URL that will go to our router 
 //* variable we made earlier (line 42 above).  Anything that goes through this URL
 //* will then go to our file_nameRouter. You want to try to keep
 //* the URL and route_name somewhat similar for readability.
 //* e.g app.use('/numbers', numbersRouter)
 // !!! Routes go AFTER app.use(express.json()); !!!
/*
    app.use('/URL_name', route_nameRouter);
*/

    //? Between this first bit of code and the following is
    //? where we would write our request functions for the server. 
    //? Everything here will be:
    //? GET requests
    //? POST requests
    //? PUT requests (presumably)
    //? DELETE requests 
/*
    app.use(express.static('server/public'));

    app.listen(port, () => {
        console.log(`listening on port: ${port}`);
    });
*/

//TODO Setting up the Routers; route_name.router.js
//* If I'm not mistaken, the router can be named whatever we want,
//* but it should represent a URL we will be giving the
//* API requests in it. For example, in this assignment, one of my URL routes
//* is '/numbers', so I will be naming this router after that URL:
//* numbers.router.js

// We will need to require express like we did in the server.js
/*
    const express = require('express');
    const router = express.Router(); 
*/
//! When writing requests for a router, instead of app.get, 
//! it will instead be router.get. This should apply for the other 
//! requests made, as well. when using the URL in the requests, 
//! you will remove the first part of the URL, leaving only the '/' or
//! '/:id' for DELETE requests. Possibly similar for PUT requests.

    //? Between this first bit of code and the following is
    //? where we would write our request functions for the router. 
    //? Everything here will be:
    //? GET requests
    //? POST requests
    //? PUT requests (presumably)
    //? DELETE requests 

// !!! IMPORTANT !!!
//* THIS MUST GO AT THE BOTTOM OF EVERY ROUTER! 
//* Don't forget :)
/*
    module.exports = router;
*/