"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import * as https from 'https';
// const key = fs.readFileSync(__dirname + '/../ssh/selfsigned.key');
// const cert = fs.readFileSync(__dirname + '/../ssh/selfsigned.crt');
// const options = {
//     key: key,
//     cert: cert
// };
const app = express();
app.use(express.urlencoded());
app.use('/assets', express.static(__dirname + '/assets'));
app.use('/static', express.static(__dirname + '/static'));
app.get('/', (req, res) => {
    res.send(`
    <head>
        <title>Facemash</title>
        <link rel="stylesheet" href="static/style.css?v=1.1">
        <link rel="icon" href="static/favicon.ico" type="image/x-icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=0.6">
    </head>
    <body>
        <h1>Hello world</h1>
        <main>
            <p>Your node server is running</p>
        </main>
    </body>
    `);
});
app.post('/send', (req, res) => {
    const text = req.body.text;
    res.send('You sent ' + text);
});
// const server = https.createServer(options, app);
const port = 80;
app.listen(port, () => {
    console.log("Listening on " + port);
});
//# sourceMappingURL=index.js.map