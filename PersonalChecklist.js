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
    const express = require(express);
    const app = express();
    const port = process.env.PORT || 5001; */
    //!This app.use will allow req.body to be used. IMPORTANT
 /* app.use(express.json());
 */
    //? Between this first bit of code and the following is
    //? where we post the request functions. 
    //? Everything here will be:
    //? GET requests
    //? POST requests
    //? PUT requests (presumably)
    //? DELETE requests (presumably)
/*
    app.use(express.static('server/public'));

    app.listen(port, () => {
        console.log(`listening on port: ${port}`);
    });
*/