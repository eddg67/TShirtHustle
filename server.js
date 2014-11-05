/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//1
var http = require('http'),
    express = require('express'),
    path = require('path'),
    config = require('./config')();
    
 var MongoClient = require('mongodb').MongoClient;
 var items;
 var viewPath = '/Users/e/Documents/Projects/TShirtHustle/views';


// var collection = mDB.collection('products');
  //console.log(collection);
//2 
var app = express();
app.set('port', config.port|| 3000); 
app.use(express.static(path.join(__dirname, 'public_html')));

//app.set('views', '/Users/e/Documents/Projects/TShirtHustle/views');
//app.set('view engine', "jade");
//app.engine('jade', require('jade').__express);

// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/ss_products", function(err, db) {
  if(err) {
        console.log('Sorry, there is no mongo db server running.');
    } else {
        
        var attachDB = function(req, res, next) {
            req.db = db;
            next();
        };
        
        app.get('/',attachDB, function (req, res) {
          res.sendfile('index.html');
        });
        
        app.get('/products',attachDB, function (req, res) {
            //console.log(req.db.collection('products').find());
          //res.contentType('application/json');find({"IMAGE URL":{$ne:null}});
          var el = req.db.collection('products').find({"Big Image":{$ne:""}}).toArray(function(err, items) {
              //console.log(items)
              res.send(items);
          })
         // res.send(el);
        });
        
        http.createServer(app).listen(config.port, function(){
            console.log('Express server listening on port ' + config.port+ '__dirname'+__dirname);
        });
    }
});
 

 
/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  });*/
