import zlib from 'zlib';
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
    let gzip = zlib.createGzip();
    let readStream = createReadStream('src/zip/files/fileToCompress.txt');
    let writeStream = createWriteStream('src/zip/files/archive.gz');

    readStream
        .pipe(gzip)
        .pipe(writeStream);
};

await compress();