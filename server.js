/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//1
var http = require('http'),
    express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    crypto = require('crypto'),
    api = require('./routes/api'),
    search = require('./routes/search'),
    index = require('./routes/index'),
    store = require('./routes/store'),
    config = require('./config')();

var expressMongoDb = require('express-mongo-db');

 var items;
 var lastItemId=0;
 var pageLimit = 24;


        var app = module.exports = express();
        app.use(expressMongoDb('mongodb://localhost:27017/ss_products'));
        var router = express.Router();
        app.use(router);

        app.set('port', config.port|| 3000);

        app.use(express.static(path.join(__dirname, 'public_html')));
        app.use( bodyParser.json() );       // to support JSON-encoded bodies
        app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }));


        app.get('/', index.index);

        app.get('/about',index.about);

        app.get('/detail',index.detail);
        app.get('/detail/:id', index.detail);

        app.get('/store', store.index);
        app.get('/store/:id', store.index);

        app.get('/search',search.index);
        app.get('/search/:id',search.index);

        //API Routes 
        app.get('/api/cat',api.catergories);
        app.get('/api/products',api.products);
        app.get('/api/products/:page',api.products);

        app.get('/api/detail/:id',api.detail);


        app.get('/api/search/:id/:page',api.search);
        app.get('/api/search/:id',api.search);

        app.get('/api/store/:id/:page',api.store);
        app.get('/api/store/:id',api.store);


        app.post('/contact', api.contact);


        http.createServer(app).listen(config.port, function(){
            var d = new Date();
            var n = d.toUTCString();
            var hash = crypto.createHash('sha256').update("value").digest('base64');
            console.log('Express server listening on port ' + config.port+ '__dirname'+__dirname+'  Time '+hash);
        });



