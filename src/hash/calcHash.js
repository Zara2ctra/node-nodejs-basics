import { createHash } from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) throw err;
        const hashHex = createHash('SHA256').update(data).digest('hex');
        console.log(hashHex)
    });
};

await calculateHash();