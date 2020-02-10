'use strict';

// @ts-ignore
const { spawn } = require('child_process');

// @ts-ignore
const numberBuild = process.argv[2];
// @ts-ignore
const IP_SERVER = process.argv[3];

// @ts-ignore
const command = spawn('scp', [`-r`, `./sellerup-front-${numberBuild}.tar.gz`, `root@${IP_SERVER}:/home/sellerup-staging/sellerup-front/build/`]);
command.stdout.on('data', data => {
    console.log(command)
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
