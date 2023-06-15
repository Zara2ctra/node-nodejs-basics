import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    let writeStream = createWriteStream('src/streams/files/fileToWrite.txt');

    stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    })
};

await write();