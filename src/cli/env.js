import { env } from 'node:process';

const parseEnv = () => {
    const prefix = 'RSS_';
    let resultArr = [];
    for (const [key, value] of Object.entries(env)) {
        if (key.includes(prefix)) resultArr.push(`${key}=${value};`);
    }
    console.log(resultArr.join(' '));
};

parseEnv();