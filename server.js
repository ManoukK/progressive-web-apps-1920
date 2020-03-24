require('dotenv').config();

const express = require('express');
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

const data = require('./modules/api'); 
const revManifest = require('./static/rev-manifest');

app.use(/.*-[0-9a-f]{10}\..*/, function(req, res, next){
    res.header('Cache-Control', 'max-age=365000000');
    next();
})

// app.set('ETag', false);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('static'));



app.get('/offline', function(req, res){
    res.render('offline', { revManifest })
});

app.get('/weather/:id', function(req, res){ 
    //hier heeft Robin mij mee geholpen. 
    const index = req.params.id;
    data.getData()
    .then(function(results) {
        const renderData = results[index]
        res.render('detail', { 
            results: renderData,
            revManifest
        })
    });
});

app.get('/', function(req, res){ 
    data.getData()
    .then(function(results) { 
        res.render('main', { 
            results,
            revManifest
        })
    });
});

app.listen(port, host, function() {
    console.log(`Example app listening on port ${port}!`);
});