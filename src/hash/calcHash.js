import { createHash } from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    const fileData = fs.readFileSync('src/hash/files/fileToCalculateHashFor.txt');
    const hashHex = createHash('SHA256').update(fileData).digest('hex');
    console.log(hashHex)
};

await calculateHash();