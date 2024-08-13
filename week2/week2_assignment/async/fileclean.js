const fs=require('fs');
const { WriteStream } = require('tty');

function filterData(text){
let temp="";
for(let i=0;i<text.length;i++){
    if(text[i]==" " && text[i-1]!=" "){
        temp=temp+" ";
    }
    else if(text[i]==" "){
        continue;
    }
    else{
        temp=temp+text[i];
    }
}
return temp;

}

//using callbacks but the solution is shit coz of callback hell
// next better appraoch is using promises
 function clean(filename){
     fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            throw err;
        }
        const processed=filterData(data);
        console.log(processed)
        fs.writeFile(filename,processed,(err)=>{
            if(err){
                throw err;
            }
            console.log("successffully written")
        })
    })
}
// clean('sample.txt');


// in this approach we use promises better approach than last time
function readFile(filename){
    return new Promise((res,rej)=>{
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err){
            rej(err);
            }
            res(data);
        })
    })
}



function writeData(data){
    const processed=filterData(data);
    return new Promise((res,rej)=>{
        fs.writeFile(filename,processed,(err)=>{
            if(err){
                throw rej(err)
            }
            res('written successfully');
            
        })
    })
}

filename='sample.txt'
// readFile(filename)
// .then((data)=>{
//    writeData(data)
//    .then((data)=>{
// console.log(data);
//    })
// })

//finally the best way that is using the async await 

function read(filename){
    return new Promise((res,rej)=>{
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err){
            rej(err);
            }
            res(data);
        })
    })
   
}

function write(filename,data){
    const processed=filterData(data);
    return new Promise((res,rej)=>{
        fs.writeFile(filename,processed,(err)=>{
            if(err){
                throw rej(err)
            }
            res('written successfully');
            
        })
    })
}

async function main(){
    const data=await read(filename);
    const writing= await write(filename,data);
}
main();
