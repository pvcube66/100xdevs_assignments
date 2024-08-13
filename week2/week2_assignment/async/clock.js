function clock(){
    setInterval(()=>{
        const now=new Date();

        const hour=now.getHours();
        const mins=now.getMinutes();
        const sec=now.getSeconds();
        console.log(`${hour}:${mins}:${sec}`);

        //for 12 hour format:
        const hour2=now.getHours()%12;
        const ln=hour2>12?'pm':'am'
        console.log(`12 hour format: ${hour2}:${mins}:${sec} ${ln}`);
    },1000)
}
// clock()

//using setTimeout

function clock2(){
    setTimeout(()=>{
        const now=new Date();

        const hour=now.getHours();
        const mins=now.getMinutes();
        const sec=now.getSeconds();
        console.log(`${hour}:${mins}:${sec}`);

        //for 12 hour format:
        const hour2=now.getHours()%12;
        const ln=hour2>12?'pm':'am'
        console.log(`12 hour format: ${hour2}:${mins}:${sec} ${ln}`);
        clock2();
    },1000);
}
setTimeout(clock2,1000);
