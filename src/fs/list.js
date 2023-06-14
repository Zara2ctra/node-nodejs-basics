import {existsSync, readdir} from "fs";


const list = async () => {
    if (!existsSync('src/fs/files/')) {
        throw Error('FS operation failed')
    } else {
        readdir('src/fs/files/', 'utf8', (err, files) => {
            console.log(files)
            if (err) throw err;
        })
    }
};

await list();