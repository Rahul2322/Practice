//Creating Custom Streams

const {Readable,Writable} = require('stream')

//Creating a readable obj to read data
const readableStream = new Readable({
    //highWaterMark:2,//this property sets a threshold i.e size of data to store here it is 2 bytes although it can store more than that it just 
    //signifies a threshold i.e limit
    read(){
        
    }
})

const writableStream = new Writable({
    write(s){
        console.log('writing,',s.toString());
    }
})


readableStream.on('data',(chunk)=>{
    // console.log('Chunk:',chunk);;
    writableStream.write(chunk);
})

readableStream.push('Hello from the world!'); //here maually adding data using push method with then gets read as chunk
//console.log(readableStream.push('H')); //it will give true if number of bytes is less than hightwatermar note:1 character is 1 byte





