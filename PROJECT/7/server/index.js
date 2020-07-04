// console.log('Я вам не Димон')
const express = require('express');
const fs = require('fs');

const write = require('./utils/writer');
const Basket = require('./services/basket_service');

const server = express();
server.use(express.json());


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

server.post('/basket', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newCart = Basket.add(JSON.parse(data), req.body);
            write('./server/db/basket.json', newCart)
            .then(status => {
                if (status) {
                    res.json({ status });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.put('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newCart = Basket.change(JSON.parse(data), req.params.id, req.body.amount);
            write('./server/db/basket.json', newCart)
            .then(status => {
                if (status) {
                    res.json({ status });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

server.delete('/basket/:id', (req, res) => {
    fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
        if (!err) {
            let newCart = Basket.delete(JSON.parse(data), req.params.id);
            write('./server/db/basket.json', newCart)
            .then(status => {
                if (status) {
                    res.json({ status });
                } else {
                    res.sendStatus(500);
                }
            })
        }
    })
})

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



