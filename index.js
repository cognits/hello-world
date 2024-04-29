const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
    console.log('200 GET /');
    res.send('Hello World!')
});

app.get('/healthcheck', (req, res) => {
    console.log('200 GET /healthcheck');
    res.sendStatus(200);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(`404 ${req.method} ${req.url}`);
    res.send('Not found');
});

app.listen(port, () => {
  console.log(`HELLO WORLD started listening on port ${port}`);
});

