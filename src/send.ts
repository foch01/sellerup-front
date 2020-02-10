import { spawn } from 'child_process';

const numberBuild = process.argv[2];
const IP_SERVER = process.argv[3];

const command = spawn('scp', [`./dist/*`, `root@${IP_SERVER}:/home/sellerup-front/`]);
command.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});
command.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});
