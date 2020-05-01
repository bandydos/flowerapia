const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log('Listening on ' + port);
});

//Example species.
var flowerspecies = {
    "sunflower": 5,
    "daisy": 21,
    "rose": 4
};

var flowerspeciesarr = [{
    "id": 1,
    "name": "sunflower",
    "quantity": 5
}, 
{
    "id": 2,
    "name": "daisy",
    "quantity": 21
},
{
    "id": 3,
    "name": "rose",
    "quantity": 4
}];

//Search for flowers in stock.
app.get('/search/:flowers', (req, res) => {
    let flower = req.params.flowers;
    var reply;
    if (flowerspecies[flower]) {
        reply = {
            status: "In stock",
            flower: flower,
            quantity: flowerspecies[flower]
        }
    }
    else {
        reply = {
            status: "Not in stock",
            flower: flower
        }
    }
    res.send(reply);
});

//Adding new specie & quantity.
app.get('/add/:flowerspecie/:quantity', (req, res) => {
    let data = req.params;
    let fs = data.flowerspecie;
    let q = parseInt(data.quantity);
    var reply;
    if (!q) {
        reply = {
            msg: "Quantity is required."
        }
    }
    else {
        //Adding a flower (key value pair).
        flowerspecies[fs] = q;
        reply = {
            msg: "Thank you for adding a flower."
        }
    }
    res.send(reply);
});

app.get('/flowerspecies', (req, res) => {
    res.send(flowerspecies);
});

app.get('/flowerspeciesarr', (req, res) => {
    res.send(flowerspeciesarr);
})


app.use(express.static('public'));


