/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
k
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

    const express= require('express')
    const fs=require('fs')
    const app=express()
    const port=3000

    app.get('/files',(req,res)=>{
      let ans=[]
      fs.readdir('/files',(err,files)=>{
        if(err){
          throw err;
        }
        else{
          files.forEach((file)=>{
                ans.push(file);
          })
        res.status(200).json(ans);

        }
      })
    })





module.exports = app;
