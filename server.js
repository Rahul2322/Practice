const http = require('http');
const fs = require('fs');
const {Transform,pipeline} = require('stream')
const replaceWordProcessing = require('./replaceWordProcessor');
const upperCaseWordProcessing = require('./uppperCaseProcessor');
const server = http.createServer((req,res)=>{

    if(req.url != '/'){
       return res.end();
    }

   //Downloading big files bad way

//    const file = fs.readFileSync('sample.txt');
//    const file = fs.readFileSync('2022-05-03 14-54-25.mkv'); //We can check what happens during the process is observing activity monitor which shows what memory is being used
//    res.writeHead(200,{'Content-Type':'video/mkv'})
//    return res.end(file);

   //Downloading big file using good way (Streams)

  // const readableStream = fs.createReadStream('sample.txt');
   //const readableStream = fs.createReadStream('2022-05-03 14-54-25.mkv');
   //readableStream --> writableStream
   //here req is readablstream and res is writablestream
   //res.writeHead(200,{'Content-Type':'video/mkv'})
   //readableStream.pipe(res)


//Copy files in bad way

//    const file = fs.readFileSync('sample.txt');
//    fs.writeFileSync('output.txt',file);


   //Copy files in good way

//    const readStream = fs.createReadStream('sample.txt');
//    const writeStream = fs.createWriteStream('output.txt');
//    readStream.on('data',(chunk)=>{
//    // console.log('Chunk:',chunk);//buffer is nodejs class and buffer stores data in memory provided and will not take data more than provided memory
//     console.log('Chunk:',chunk.toString())
//     writeStream.write(chunk);
//    })



//String Processing

const sampleFileStream = fs.createReadStream('sample.txt');
const outputWritableStream = fs.createWriteStream('output.txt');

// sampleFileStream.on('data',(chunk)=>{
//     // console.log('Chunk:',chunk.toString());
//     //Process
//     //const upperCaseString = chunk.toString().toUpperCase();
//     const  finalString = chunk.toString().replace(/ipsum/gi,'cool').toUpperCase();
   
//     //Writable stream
//     outputWritableStream.write(finalString)
// })



//sampleFileStream.pipe(replaceWordProcessing).pipe(upperCaseWordProcessing).pipe(outputWritableStream)
// sampleFileStream
// .pipe(replaceWordProcessing)
// .on('error',(err)=>{
// console.log(err);
// })
// .pipe(upperCaseWordProcessing)
// .on('error',(err)=>{
//     console.log(err);
// })
// .pipe(outputWritableStream)
// .on('error',(err)=>{
//     console.log(err);
// })




//pipeline is used to pipe every readablestream to writable sttream and then it executes a callback in the end where we can handle err
pipeline(sampleFileStream,
    replaceWordProcessing,
    upperCaseWordProcessing,
    outputWritableStream,
    (err)=>{
       if(err){
        console.log('Error handling here ',err);
       }
    }
    );

res.end();

})

const PORT = process.env.PORT || 5700

server.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)})