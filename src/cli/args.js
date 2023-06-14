import { argv } from 'node:process';

const parseArgs = () => {
    const args = argv.slice(2);
    let resultString = '';
    for (let i = 0; i < args.length; i += 2) {
        const propName = args[i].slice(2);
        const value = args[i+1];
        resultString += `${propName} is ${value}, `;
    }
    console.log(resultString);
};

parseArgs();