const express=require('express')
const app=express()

function checkAge(req,res,next){
    const age=req.query.age;
    if(age<14){
       return res.status(403).send('your underage')
    }
    next()
}

function moneyCheck(req,res,next){
    const money=req.query.money
    if(money<10){
        return res.status(404).send('your poor');
    }  
    next();
}
app.get("/ride1",checkAge,moneyCheck,(req,res)=>{
   res.json({
    msg:"your riding brother"
   })
})

app.listen(3000);