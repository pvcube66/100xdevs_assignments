// arrow functions: its also function but a cleaner way

// function sum(a,b){
//     return a+b;
// }
// const ans=sum(1,2);
// console.log(ans);
// arrow function
// const temp=(a,b)=>{
//     return a+b
// }
// console.log(temp(5,6));

//problem
//given an array, give me back a new array in which every value is multipled by 2

let arr = [1, 2, 3, 4, 5];
// let temp=[]
//simple and dumb way...
// for(let i=0;i<arr.length;i++){
//     temp[i]=arr[i]*2;
// }
// console.log(temp);

//better solution :
//by using map: a map is used to apply some function on each element of the array and return a new array

function transform(i) {
  return i * 2;
}
// console.log(transform(2));
const ans = arr.map(transform);

function cuber(i) {
  return i * i * i;
}
const cubesol = arr.map((i) => {
  return i * i * i;
});

// console.log(cubesol)
// console.log(ans)

//assignment : creratte a map function thaat takes 2 inputs(arr,transformation function)
// and transform the array into a new one using the transforamtin fn

function mapper(arr, fn) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(fn(arr[i]));
  }
  return temp;
}
const mapperans = mapper(arr, cuber);
console.log(mapperans);

// filter function:
// problem : givene an input array reeturn all the even nos:
//dummb waay:
let even_dum=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    even_dum.push(arr[i]);
    }
}
console.log(even_dum);

//you cant use a map here
// but we have a filter function..
//filter function is a function on a array which can be used to filter the elements of the 
//array based on some conditions it will return a new array of elements which satisfied
//the condition

const betterEven=arr.filter((i)=>{
    return i%2==0;
})
console.log(betterEven)
function filtering(i){
    if('hH'.includes(i[0]))
        return true;
    else
       return false;
}
const tempArr=["harkirat","vishnu","harman","hulk"]
const better=tempArr.filter(filtering)
console.log(better)
