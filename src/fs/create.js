import { writeFile, existsSync } from 'fs';

const create = async () => {

    if (existsSync('src/fs/files/fresh.txt')) {
        throw Error('FS operation failed')
    } else {
        writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
            if (error) throw error;
        })
    }

};

await create();