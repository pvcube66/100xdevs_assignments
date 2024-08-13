/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
// res("promise resolved after n seconds")
res()
        },n*1000)
    })
}



module.exports = wait;

//q2:
  /*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

 function sleep(milliseconds) {
   return new Promise((res,rej)=>{
      setTimeout(()=>{
            res()
        },milliseconds);
    })
}

module.exports = sleep;

//q3:
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
return new Promise((res,rej)=>{
    setTimeout(res,t*1000);
})
}

function wait2(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
    })
}

function wait3(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*(1000));
    })

}

function calculateTime(t1, t2, t3) {
    const start=performance.now();

return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(()=>{
    const end=performance.now();
    return (end-start);
})
}

module.exports = calculateTime;

//q4:
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
   return new Promise((res,rej)=>{
    setTimeout(res,t*1000);
   })
     
}

function wait2(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
       })
}

function wait3(t) {
    return new Promise((res,rej)=>{
        setTimeout(res,t*1000);
       })

}

function calculateTime(t1, t2, t3) {
    const start=performance.now();
    return new Promise((res,rej)=>{
        wait1(t1)
    .then(()=>{
        wait2(t2)
        .then(()=>{
            wait3(t3)
            .then(()=>{
                const end=performance.now();
                res(end-start);
            })
        })
    })
    })

}

module.exports = calculateTime;

