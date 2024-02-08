const {Readable,Writable} = require('stream')

const readableStream = new Readable({
    objectMode:true,  //It signifies the data we are passing is object and not string
    highWaterMark:2,//this property sets a threshold i.e number of object
    read(){
        
    }
})

// const writableStream = new Writable({
//     write(s){
//         console.log('writing,',s.toString());
//     }
// })


readableStream.on('data',(chunk)=>{
    console.log('Chunk:',chunk);;
   // writableStream.write(chunk);
})

console.log(readableStream.push({
    name:'rahul',
    age:28,
    profession:'IT'
})); //here maually adding data using push method with then gets read as chunk
//console.log(readableStream.push('H')); //it will give true if number of bytes is less than hightwatermar note:1 character is 1 byte
