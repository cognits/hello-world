const express = require('express');
const app  = express();
const port = process.env.APP_PORT || 3000;

// / path
app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hello World!')
});


// /healthcheck path
app.get('/healthcheck', (req, res) => {
    console.log('GET /healthcheck');
    res.sendStatus(200);
});


// 404 middleware
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    res.send('Not found');
});

// start server
app.listen(port, () => {
  console.log(`HELLO WORLD: started listening on port ${port}`);
});

