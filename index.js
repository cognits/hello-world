const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3000;

// root path
app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hello World!')
});

// healthcheck path
app.get('/healthcheck', (req, res) => {
    console.log('GET /healthcheck');
    res.sendStatus(200);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    res.send('Not found');
});

app.listen(port, () => {
  console.log(`HELLO WORLD: started listening on port ${port}`);
});

