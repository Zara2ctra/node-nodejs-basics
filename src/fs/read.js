import { readFile } from 'fs';

const read = async () => {
    readFile('src/fs/files/fileToRead.txt', 'utf8', (err, fileContent) => {
        if (err) throw Error('FS operation failed')
        console.log(fileContent);
    })
};

await read();