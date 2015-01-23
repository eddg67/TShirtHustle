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
    config = require('./config')();
    
 var MongoClient = require('mongodb').MongoClient;
 var items;
 var viewPath = '/Users/e/Documents/Projects/TShirtHustle/views';



// var collection = mDB.collection('products');
  //console.log(collection);
//2 
var app = express();
var router = express.Router();
app.use(router);
  
app.set('port', config.port|| 3000); 

app.use(express.static(path.join(__dirname, 'public_html')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
        
       /* app.get('/search',attachDB, function (req, res) {
            var value = req.body.q;
            var hash = crypto.createHash('sha256').update(value).digest('base64');
            var myAffiliateID = '1014588';
            var APIToken = "10ecldpyOJEVk1za";
            var APISecretKey = "ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i";
           // var myTimeStamp = gmdate(DATE_RFC1123);
            res.send(value);
          
        });*/
        
        
      
        
       /* app
            .get('/search',function(req, res, next) {
                res.send("value");
            })
            .post('/search',function(req, res, next) {
              // maybe add a new event...
        });
        */
   
       router.route('/api/search/:id')

	// create a bear (accessed at POST http://localhost:8080/bears)
	.post(attachDB,function(req, res) {
		
		 res.send("tagId is set to " + req.param("id"));

		
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(attachDB,function(req, res) {
   
	var key = req.param("id");
        console.log(key);
        var el = req.db.collection('products').find(
              
                    { $or:
                        [
                        {"Name":new RegExp(key, 'i')},
                        {"Big Image":new RegExp(key, 'i')},
                        {"Short Description":new RegExp(key, 'i')},
                        {"Merchant Category":new RegExp(key, 'i')}
                    ]
                }
                    
                ).toArray(function(err, items) {
                    console.log(items);
                    
                    res.send(items);
                });
	});

        
        app.post('/contact',attachDB,function(req,res){
            var email = req.body.email;
           res.send(email);
        });
        
        app.get('/api/products',attachDB, function (req, res) {
            //console.log(req.db.collection('products').find());
          //res.contentType('application/json');find({"IMAGE URL":{$ne:null}});
          var el = req.db.collection('products').find({"Big Image":{$ne:""}}).toArray(function(err, items) {
              //console.log(items)
              res.send(items);
          })
         // res.send(el);
        });
        
        http.createServer(app).listen(config.port, function(){
            var d = new Date();
            var n = d.toUTCString();
            var hash = crypto.createHash('sha256').update("value").digest('base64');
            console.log('Express server listening on port ' + config.port+ '__dirname'+__dirname+'  Time '+hash);
        });
    }
});
 

 
/*http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  });*/
