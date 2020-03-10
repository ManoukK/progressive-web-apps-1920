const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const data = require('./modules/api'); 

app.get('/:id', function(req, res){ 
    //hier heeft Robin mij mee geholpen. 
    const index = req.params.id

    data.getData()
    .then(function(results) {
        const renderData = results[index]
        res.render('detail', { results: renderData })
    });
});

app.get('/', function(req, res){ 
    data.getData()
    .then(function(results) { 
        res.render('index', { results })
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));