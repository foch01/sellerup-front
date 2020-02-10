'use strict';

// @ts-ignore
const { spawn } = require('child_process');

// @ts-ignore
const numberBuild = process.argv[2];
// @ts-ignore
const IP_SERVER = process.argv[3];

// @ts-ignore
const command = spawn('ssh', [
    `root@${IP_SERVER}`,
    'sudo',
    '/home/sellerup-staging/sellerup-front/deploy.sh',
    '-n',
    `${numberBuild}`,
    '-d',
    'false',
]);
command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
