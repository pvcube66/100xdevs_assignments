const express=require('express');
const app=express()
// this is a dumb way of doing input validation and authentication
app.get('/health-check',(req,res)=>{
    const username=req.headers.username;
    const pass=req.headers.password;

    const kidneyId=parseInt(req.query.kidneyId);
    if(kidneyId!=1 && kidneyId!=2){
          res.status(404).send("invalid input");
          return;
    }

    if(username==='vishnu' && pass==="hi"){
        res.json({
            msg:"nice kidney brother"
        })
        return;
    }
    else{
        res.status(404).send("invalid user details")
    }
})

app.listen(3000);