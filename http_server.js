//for getting the express library to use in our project
const express = require("express");
//creating the express object ig
const app = express();
//init the portno
const port = 3000;

//get method
app.get("/", function (req, res) {
  // console.log("request is ended...");
  // hi there
  // res.send("<b>hello world my brother</b>");
  const n=req.query.k;
  const ans=calc(n);
  res.send(`the ans is : ${ans}`);
});

// app.post("/", (req, res) => {
//   res.send("hi there");
// });
// app.listen(port,()=>{
//     console.log(`exampleapp listening on port ${port}` );
// })
app.listen(port);

//create a todo app that lets users store todos on the server
//adavanced:
//create a http server from scratch in or in rust using actix-web or in golag using gurrila framework

function calc(n){
  return n*(n-1)/2;
}


