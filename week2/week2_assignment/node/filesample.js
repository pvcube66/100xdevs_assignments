const express=require('express');
const fs=require('fs')

const path='C:\\Users\\Ramkrishna\\Desktop\\100xdevs\\week2\\week2_assign\\week-2\\01-async-js\\tests'

fs.readdir(path,(err,files)=>{
    if(err)
        throw err;
    else{
        files.forEach((file)=>{
            console.log(file);
        })
    }
})
