const express=require('express')
const app=express()
const jwt=require('jsonwebtoken');

const secretKey='12345'
const ALL_USERS=[{
    username:'vishnu@gmail.com',
    password:'pavu',
    name :'vishnu vardhan'
},
{
    username:'samba@gmail.com',
    password:'allah',
    name :'samba boi'
},
{
    username:'kabali@gmail.com',
    password:'hehe',
    name :'rajinikanth'
}
]
function userExists(username,password){
    const response=ALL_USERS.find((t)=> t.username===username  && t.password===password)
    if(response){
        return true
    }
    return false;
}

app.post('/signin',(req,res)=>{
    const username=req.query.username;
    const password=req.query.password;
    // console.log(username,password);
    if(!userExists(username,password)==true){
        return res.status(403).send('user not found');

    }
    
       const token=jwt.sign({  data:username},secretKey);
       res.send({token});

    
})

app.get('/users',(req,res)=>{
    const data=req.headers.auth;
    console.log(data)

   try{
        const decoded=jwt.verify(data,secretKey);
        const username=decoded.username;
        const response=ALL_USERS.filter((element)=>{
            if(element.username===username){
                return false;
            }
            else{
                return true;
            }
        })


         return res.json({response});
   }catch{
    
    res.status(403).send('wrong token');
   }
    

})
 

app.listen(3000);