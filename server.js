const express = require('express');
// Place express module in a variable called 'app'.
const app = express();
// Require path for static file use.

let products = [
    {
    id: 1,
    name: 'laptop'
    }, {
    id: 2,
    name:'microwave'
    }
];

let currentId = 2;

app.use(express.static(__dirname));

app.get('/products', function(req, res) {
    res.send('SUCCESS!');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));