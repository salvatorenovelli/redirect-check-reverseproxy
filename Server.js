let app = require('express')();
let httpProxy = require('http-proxy');

let apiProxy = httpProxy.createProxyServer();
let frontend = 'http://redirect-check-frontend-service:80',
    backend = 'http://redirect-check-backend-service:8080';



let port = 3001;


process.on('uncaughtException', function (err) {
    console.log("Uncaught exception: " + err.message);
});

app.all("/health", function (req, res) {
    console.log('Health check invoked');
    res.send('I\'m fine!')
});

app.all("/api/*", function (req, res) {
    //console.log('redirecting ' + req.originalUrl + ' to backend');
    apiProxy.web(req, res, {target: backend});
});

app.all("*", function (req, res) {
    //console.log('redirecting ' + req.originalUrl + ' to frontend');
    apiProxy.web(req, res, {target: frontend});
});

app.listen(port);
console.log("Proxy started! Listening on " + port);
