const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();
const crypto = require('crypto')

eventEmitter.on('myEvent', (data) => {
console.log(data, '- FIRST');
});

console.log('Statement A');

eventEmitter.on("myEvent", data => {
console.log(data, '- SECOND');
});

eventEmitter.emit('myEvent', 'Emitted Statement');

console.log("Statement B");

function b(){
    var t = 1;
    function c(){
    console.log(t);
    var t = 2;
    console.log(t);
    }
    c();
    console.log(t); 
}
    b();


const getuser = async(id)=>{
 return {id}
 }
   
 getuser(1).then(e=> console.log(e))

 const a = [1,2,3,4,5,6,7];

 //Is there any other solution

//  const res = Promise.all( a.map( ele=> getuser(ele))).then(val=>console.log(val))
 

//  for (var i = 0; i < 5; i++) {
//     setTimeout((i) => {
//       console.log(i)
//     }, i)
//   }
  
//   for (var i = 0; i < 5; i++) {
//     setTimeout((i) => {
//       console.log(i)
//     }, i,i)
//   }
    

  function calculateDaysToIndependence() {
    const today = new Date();
    const independenceDate = new Date('1947-08-15');
    console.log(today.getTime(),independenceDate.getTime())
    // Calculate the time difference in milliseconds
    const timeDiff = today.getTime() - independenceDate.getTime();
    
    // Convert the time difference to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    return daysDiff;
  }
  
  // Example usage: Calculate days to August 15, 1947
  const daysToIndependence = calculateDaysToIndependence();
  
  console.log(`Days since Independence Day: ${daysToIndependence}`);


  //reverse using recursion
  function solution(str){
    if(str.length === 0) return ""

    return str[str.length - 1] + solution(str.slice(0,str.length - 1))
  }

  console.log(solution('hello'))


  const object1 = {
    name:"Thor",
    age:"1500",
    about:function(){
        console.log(`My ${this.name} and i am ${this.age} old`)
    }

  }

const myFunc = object1.about;

console.log(myFunc)


//write a program to find all possible subsets of array 
//ex: [1,2,3]
//sol:subsets [
//   [],       [ 1 ],
//   [ 1, 2 ], [ 1, 2, 3 ],
//   [ 1, 3 ], [ 2 ],
//   [ 2, 3 ], [ 3 ]
// ]
var subsets = function(num){
    let result = [[]];
     function recurse(indx,currArr){
        for(let i=indx;i<num.length;i++){
            currArr.push(num[i]);
           
            result.push([...currArr]);
            console.log(result)
            recurse(i+1,currArr);
            currArr.pop();

        }
     }
     recurse(0,[]);
     return result
}

const num1 = [1,2,3];
console.log('subsets',subsets(num1))

console.log(crypto.createHash('sha512','reahul').update('hello').digest('hex'))