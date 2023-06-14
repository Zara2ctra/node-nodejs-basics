import { existsSync, readdir, mkdir, copyFile } from 'fs';

const copy = async () => {
    if (!existsSync('src/fs/files/') || existsSync('src/fs/files_copy/')) {
        throw Error('FS operation failed')
    } else {
        readdir('src/fs/files/', 'utf8', (err, files) => {
            if (err) throw err;
            mkdir('src/fs/files_copy', (err) => {
                if (err) throw err;
            });
            for (let i = 0; i < files.length; i++) {
                copyFile(`src/fs/files/${files[i]}`, `src/fs/files_copy/${files[i]}`, (err) => {
                    if (err) throw err;
                })
            }


        })
    }
};

await copy();
