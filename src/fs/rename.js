import fs from "fs";

const rename = async () => {
    if (!fs.existsSync('src/fs/files/wrongFilename.txt') || fs.existsSync('src/fs/files/properFilename.md')) {
        throw Error('FS operation failed')
    } else {
        fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', err => {
            if (err) throw err;
        })
    }
};

await rename();