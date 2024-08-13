// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
// let c=0;
// setInterval(()=>{
//     c=c+1
//     console.log(c);
// },1000)

// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let c=0;
function count(){
    setTimeout(()=>{
        c=c+1;
        console.log(c);
        count()
    },1000);
}
setTimeout(count,1000);
