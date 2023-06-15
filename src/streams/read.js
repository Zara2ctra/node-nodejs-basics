import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    let readableStream = createReadStream(
        'src/streams/files/fileToRead.txt',
        "utf8"
    );

    readableStream.pipe(stdout);
};

await read();