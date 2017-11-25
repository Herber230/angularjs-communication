# angularjs-communication
AngularJS application with http requests

The project is a basic example of how AngularJS works with a RESTful API.

- /back-end-nodejs  

This folder contains an Express API prepared to allow CORS (Cross Domain Orign) requests using the port 3001

- /front-end    

This folder contains an AngularJS app running into a development web server called lite-server, and that server uses by default the port 3000. This app is configured to look for the backend running in port 3001.
    


## Requirements

- [Node and npm](http://nodejs.org)
- [Git](https://git-scm.com/)


## Installation

1. Clone the repository: 

    `https://github.com/Herber230/angularjs-communication.git`


2. Open a terminal (PowerShell, CMD or Bash) andr run the backend going into /back-end-nodejs and run the following comands: 

    -`npm install` 

    -`npm run api`


3. Open another terminal and run the frontend going into /front-end and run the following comands: 

    -`npm install` 

    -`npm run dev`
    
    
4. Open a browser in localhost:3000
