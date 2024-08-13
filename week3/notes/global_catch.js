//global catches is used to handle the exceptions: so that we dont expose our backend
// logic to end users

//its a error handling middleware , whenever user sends a wrong data as a input:
// just to make sure that our system doesnt crash or throw some exception 
//we use global catches to give better error messages


// global catches takes 4 parameters[errorMonitor,req,res,next]
// global catches are always added at the end


const express=require('express');
const app=express()


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

app.get('/health-check',userValidation,kidneyValidation,(req,res)=>{
    res.json({
        msg:'perfectly fine health ser'
    })
})

//global catches is used to handle the exceptions: so that we dont expose our backend
// logic to end users

// global catches takes 4 parameters[errorMonitor,req,res,next]

app.use((err,req,res,next)=>{
    res.json({
        msg:"something wrong with our server"
    })
})


app.listen(3000);