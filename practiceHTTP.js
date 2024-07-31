const express= require("express");
const app= express()
const port=3000;



app.get('/kkgoat',(req,res)=>{
    const n=req.query.n;
//what the fuck is this query parameter , remember brother we get something like this in websites
//https://something.com/asdf?param1=val&param2=val
//we just have this stuff 


    const ans=(n*(n-1))/2;

    res.send(`ans is : ${ans}`);
})

app.listen(port);

//we dint complete the http server using c, we have to complete tomorrw