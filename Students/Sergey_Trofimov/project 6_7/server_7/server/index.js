//console.log('zxcvbnm')

const express = require('express');
const fs = require('fs');

const server = express();

server.get('/catalog', (req, res) => {
    fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
});


server.listen(3000, () => {console.log('listen 3000')});