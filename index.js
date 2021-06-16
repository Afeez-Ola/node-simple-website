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

app.use(function(req, res, next) {
    if (res.status(404)) { res.render('404.html') }
});


// app.get('*', (req, res) => {
//     if (res.status(404)) {
//         res.sendFile(path.join(__dirname + '/public/404.html'));
//     }
// })
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on PORT${PORT}`);
});