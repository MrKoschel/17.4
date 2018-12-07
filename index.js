process.stdin.setEncoding('utf-8');
var os = require('os');
process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytac co uzytkownik podal na wejsciu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case "/exit":
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case "/version":
                process.stdout.write("node version is " + process.versions.node + "\n")
                break;
            case "/lang":
                process.stdout.write("lang is " + process.env.LANG + "\n")
                break;
            case '/getOSinfo':
                getOSinfo();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }

});
function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}
