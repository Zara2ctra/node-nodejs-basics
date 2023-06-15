import { stdin, stdout } from 'node:process';

const transform = async () => {

        stdin.on('data', data => {
            data = data.toString().split('').reverse().join('').trim()
            stdout.write(data + "\n\n")
        });
};

await transform();