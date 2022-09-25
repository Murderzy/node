const stream = require("stream");
const buffer = require("buffer");
const fs = require("fs");

const writeStream = fs.createWriteStream("DocWrite.txt");  //  создание пишущего стрима


writeStream.setDefaultEncoding("ascii");  //  установка кодировки ascii

writeStream.write("Hello world! \n");  //  запись в ascii формате

writeStream.setDefaultEncoding("utf-8");  //  установка кодировки utf-8

writeStream.write("HEX");  //  запись в формате utf-8

writeStream.end("This is the end \n");  //  запись конца документа


console.log(writeStream.writableLength);  //  свойство, которое возвращает сколько байтов может быть записано


const writeStream2 = fs.createWriteStream("DocWrite1.txt");

writeStream2.cork();  // сохраняет в буфер все данные
writeStream2.write("Corked");
console.log(writeStream2.writableCorked);  //  показывате сколько раз нужно вызвать uncork()  -- 1
writeStream2.cork();
writeStream2.write("Cool");
console.log(writeStream2.writableCorked);  //  2


console.log(writeStream.writableEnded);  //  true, если метотод end() был вызван
console.log(writeStream2.writableEnded);  //  false, если метотод end() не был вызван

writeStream.destroy();  //  уничтожает созданный stream
writeStream2.destroy(); //  уничтожает созданный stream



process.stdout.write("Write something: ");  //  output
 process.stdin.on("data", (data)=>{  //  input
    process.stdout.write(data);
    process.exit();
});
//  process.stdout.write(process.stderr);  //  error



 const buf = Buffer.from("hello","utf-8");
 const str = fs.createReadStream("DocWrite.txt");

process.stdout.write(buf);
process.stdout.write("Hello");