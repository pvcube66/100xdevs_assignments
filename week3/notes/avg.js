const express=require('express');
const app=express()

function starter(req,res,next){
    const start=performance.now();
     req.body.start=start;
    next();
}
function ender(req,res,next){
    const end=performance.now();
    req.body.end=end;
    next();
}



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

app.get('/health-check',starter,userValidation,kidneyValidation,ender,(req,res)=>{

    const start=req.body.start
    const end=req.body.end;
    console.log(end-start);
    res.json({
        msg:'perfectly fine health ser'
    })
})

app.listen(3000);