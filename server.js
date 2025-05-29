const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(80, (err) => {
        if (err) throw err;
        console.log("> Ready on the http://localhost:80");
    });
});
