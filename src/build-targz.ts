// @ts-ignore
const { spawn } = require('child_process');

// @ts-ignore
const numberBuild = process.argv.slice(2);

// @ts-ignore
const command = spawn('tar', ['-zcf', `./build/sellerup-front-${numberBuild}.tar.gz`, './dist']);

command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
