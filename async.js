const three = () => console.log('Three');;
console.log('One');
console.log('Two');
// console.log('Three');
const myTime = setTimeout(() => three(),2000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('Four');
console.log('Five');
clearTimeout(myTime);

let x = 0;
const time = setInterval(() => {
    console.log(++x);
    if(x==10){
        clearInterval(time);
    }
}, 500);