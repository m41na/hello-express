const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});