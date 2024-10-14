const http = require("http");
const path = require("path");
const util = require("util");
const v8 = require("v8");
const anymatch = require('anymatch');


const hostname = '127.0.0.1';
const port = 8000;
const matchers = ['jablko', 'gruszka'];


const server = http.createServer(function (request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    console.log("Moduł anymatch")
    console.log("Instalujemy go za pomocą 'npm install anymatch'");
    console.log("Jest to prosty moduł, który pozwala nam porównać ze sobą tablice znaków" +
        "i uzyskać wartość true/false");
    console.log("Zaletą tego modułu jest to, że mozemy utworzyć tablicę zmiennych typu string" +
        " i sprawdzić czy jakaś zmienna pasuje do jakiegokolwiek elememtu z naszej tablicy." +
        " Nie musimy podawać żadnych indeksów")
    console.log(anymatch(matchers, 'jablko'));
    console.log(anymatch(matchers, 'jablka'));
    console.log(anymatch(matchers, 'gruszka'));
    console.log(anymatch(matchers, 'gruszki'));
    response.end('Koniec!\n');
});

server.listen(port, hostname, () => {
    util.log(v8.getHeapStatistics());
    console.log(path.basename(__filename));
    util.log(path.join(__dirname, 'uploads','images'));
    console.log(`Server running at http://${hostname}:${port}/`);
});

