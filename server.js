const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let products = [
{
    id: 1,
    name: 'laptop'
},
{
    id: 2,
    name: 'microwave'
}
];

let currentId = 2;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/products', function(req, res) {
    res.send({ products: products });
});

app.post('/products', function(req, res) {
    let productName = req.body.name;
    currentId++;

    products.push({
        id: currentId,
        name: productName
    });

    res.send('Successfully created product!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));