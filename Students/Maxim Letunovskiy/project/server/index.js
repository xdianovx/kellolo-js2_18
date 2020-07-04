// console.log('Я вам не Димон')
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

server.get('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data);
        }
    })
});

server.listen(3000, () => { console.log('Listen 3000...') });
// server.get('/', (req, res) => {
//     let html = '<h1>Hello Anonimus</h1>'
//     res.send(html)
// })

// server.get('/:name', (req, res) => {
//     let name = req.params.name
//     let html = `<h1>Hello ${name}</h1>`
//     res.send(html)
// })



