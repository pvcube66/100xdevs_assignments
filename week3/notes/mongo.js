const express = require('express');
const mongoose = require('mongoose');
const app=express()
app.use(express.json())
// Connect to MongoDB
mongoose.connect('mongodb+srv://yoursvishnation:15P13al23V92u@vishnu.4afqs.mongodb.net/user_app', {
    serverSelectionTimeoutMS: 30000 // Increased timeout to 30 seconds
})
// Define User model
const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

app.post('/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const first=req.body.first;
    const existingUser=await User.findOne({email:username});
    if(existingUser){
        return res.status(404).send('user already exists');
    }

    const user = new User
    ({ name: first, 
      email: username,
      password: password });
    user.save()
    res.json({
        msg:'user created successfully'
    })


})

app.listen(3000);
