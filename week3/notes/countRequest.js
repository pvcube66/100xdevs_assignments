const express=require('express');
const app=express()
// this is a dumb way of doing input validation and authentication
;
let count=0;

function counter(req,res,next){
    count=count+1;
    console.log(count)
    next();
}
// app.use(counter);

function userValidation(req,res,next){
    const username=req.headers.username;
    const pass=req.headers.password;
    if(username!='vishnu' && pass!="hi"){
        res.status(404).send('invalid user details')
        return;
    }
    else{
        res.send(next());
    }
};

function kidneyValidation(req,res,next){
    const kidneyId=parseInt(req.query.kidneyId);
    if(kidneyId!=1 && kidneyId!=2){
          res.status(404).send("invalid input");
          return;
    }
    res.send(next());
}

app.get('/health-check',counter,userValidation,kidneyValidation,(req,res)=>{
    res.json({
        msg:'perfectly fine health ser'
    })
})

app.listen(3000);