    const express=require('express');
    const app=express()
    const zod=require('zod')
    // const parser=require('body-parser')
    app.use(express.json());
    const schema=zod.array(zod.number());

    app.post('/health',(req,res)=>{
    //kidneys=[1,2]
    console.log(req.body);
        const kidneys=req.body.kidneys;
        const response=schema.safeParse(kidneys)
        const kidneyLength=kidneys.length;
        res.send(response);
    })

    app.use((err,req,res,next)=>{
        res.json({
            msg:"something wrong with our server"
        })
    })

    app.listen(3000);