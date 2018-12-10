process.stdin.setEncoding('utf-8');
var os = require('os');
var OSinfo = require('../modules/OSinfo');
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

