const express = require('express');
const path = require('path');
const http = require('http');
const app = express();


app.use(express.static(__dirname + '/dist/kart'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/kart/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));