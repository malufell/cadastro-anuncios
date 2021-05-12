const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
const router = require('./routes/anuncios.js');

app.use(express.urlencoded({
    extended: true
}));

app.use(router);

app.set('views', path.join('src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;