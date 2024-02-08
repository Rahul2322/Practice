const {Transform} = require('stream');

const replaceWordProcessing = new Transform({
    transform(chunk,encoding,callback){
       // replaceWordProcessing.emit('error',new Error('Something went wrong'))
        const finalString = chunk.toString().replace(/ipsum/gi,'cool');
        callback(null,finalString);
    }
})

module.exports = replaceWordProcessing