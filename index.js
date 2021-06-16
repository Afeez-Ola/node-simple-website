// jshint esversion: 10
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();




app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/index.html");
    res.sendFile(path.join(__dirname + '/public/index.html'));

    // res.render(index);
});

app.get('/contact-me', (req, res) => {
    // res.render(contact - me);
    res.sendFile(path.join(__dirname + '/public/contact-me.html'));

});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.use((req, res, next) => {
    res.status(404).send('<h1> Page not found </h1>');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`);
});