const express = require('express')
const item = require("./routes/item");
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .use('/item', item)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //.set('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

