import zlib from "zlib";
import {createReadStream, createWriteStream} from "node:fs";

const decompress = async () => {
    let unzip = zlib.createUnzip();
    let readStream = createReadStream('src/zip/files/archive.gz');
    let writeStream = createWriteStream('src/zip/files/fileToCompress.txt');

    readStream
        .pipe(unzip)
        .pipe(writeStream);
};

await decompress();