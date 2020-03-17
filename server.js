const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const data = require('./modules/api'); 

app.use(express.static('static'));

app.get('/:id', function(req, res){ 
    //hier heeft Robin mij mee geholpen. 
    const index = req.params.id;
    data.getData()
    .then(function(results) {
        const renderData = results[index]
        res.render('detail', { results: renderData })
    });
});

app.get('/', function(req, res){ 
    data.getData()
    .then(function(results) { 
        res.render('main', { results })
    });
});

app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});