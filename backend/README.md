1. To start the backend development Server make sure you are in the `backend` CD {folder/directory}

        cd backend

2. npm init 
     
      entrypoint => server.js

3. npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator and nodemon
 
 i. npm install bcrypt

4.  Start the Server
       
        npm run server


incase you encounter this error and unable to run the server
                "  code: 'ERR_DLOPEN_FAILED'

        Node.js v20.12.2
        [nodemon] app crashed - waiting for file changes before starting..."


simply

* rebuild bcrypt

        npm rebuild bcrypt

* reinstall bycrypt

        npm uninstall bcrypt
        npm install bcrypt

Start the Server again
       
        npm run server
