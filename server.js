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
    
 var mongoClient = require('mongodb').MongoClient;
 var items;
 var viewPath = '/Users/e/Documents/Projects/TShirtHustle/views';
 var lastItemId=0;
 var pageLimit = 48;



// Connect to the db
mongoClient.connect("mongodb://localhost:27017/ss_products", function(err, db) {
  if(err) {
     console.log('Sorry, there is no mongo db server running.');
   } else {

       /* app.get('/search',attachDB, function (req, res) {
            var value = req.body.q;
            var hash = crypto.createHash('sha256').update(value).digest('base64');
            var myAffiliateID = '1014588';
            var APIToken = "10ecldpyOJEVk1za";
            var APISecretKey = "ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i";
           // var myTimeStamp = gmdate(DATE_RFC1123);
            res.send(value);
          
        });*/

        var app = express();
        var router = express.Router();
        app.use(router);

        app.set('port', config.port|| 3000);

        app.use(express.static(path.join(__dirname, 'public_html')));
        app.use( bodyParser.json() );       // to support JSON-encoded bodies
        app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }));

        var attachDB = function(req, res, next) {
            req.db = db;
            next();
        };

        //Root Home
        app.get('/',attachDB, function (req, res) {
          res.sendfile('index.html');

        });

         app.get('/store/:id',attachDB, function (req, res) {
         console.log(req.route);
         console.log(path.join(__dirname+'/stores.html'))
                  res.sendfile(path.join(__dirname+'/public_html/index.html'));

                });

        //API call For Stores
       router.route('/api/store/:id')
       .post(attachDB,function(req, res) {

            res.send("tagId is set to " + req.param("id"));

       	}).get(attachDB,function(req, res) {

       	    var key = req.param("id");
            var el = req.db.collection('products').find(
              {
                   'Merchant Id': key

              }).limit(pageLimit)
              .toArray(function(err, items) {
                    console.log(items);
                    lastItemId = items[items.length-1];
                    res.send(items);
                 });
       	});

        app.get('/api/store/:id/:page',attachDB, function (req, res) {
          var pg = req.param("page");
          var key = req.param("id");
          var skip = pg > 1 ? pageLimit * (pg-1) : 0;

          var el = req.db.collection('products').find(
                     {
                          'Merchant Id': key

                     }).skip(skip).limit(pageLimit)
                     .toArray(function(err, items) {
                           console.log(items);
                           lastItemId = items[items.length-1];
                           res.send(items);
                        });

        });

       	//end

        //API for search
        router.route('/api/search/:id')
        .post(attachDB,function(req, res) {

           res.send("tagId is set to " + req.param("id"));

        }).get(attachDB,function(req, res) {

          var key = req.param("id");

           var el = req.db.collection('products')
            .find(
              
               { $or:
                   [
                    {"Name":new RegExp(key, 'i')},
                    {"Big Image":new RegExp(key, 'i')},
                    {"Short Description":new RegExp(key, 'i')},
                    {"Merchant Category":new RegExp(key, 'i')}
                    ]
                }
                ).limit(pageLimit)
                .toArray(function(err, items) {
                    console.log(items);
                    
                    res.send(items);
                });
	    });

       router.route('/api/search/:id/:page')
       .post(attachDB,function(req, res) {

          res.send("tagId is set to " + req.param("id"));

        }).get(attachDB,function(req, res) {

            var pg = req.param("page");
            var key = req.param("id");
            var skip = pg > 1 ? pageLimit * (pg-1) : 0;

            var el = req.db.collection('products')
            .find(

               { $or:
                   [
                    {"Name":new RegExp(key, 'i')},
                    {"Big Image":new RegExp(key, 'i')},
                    {"Short Description":new RegExp(key, 'i')},
                    {"Merchant Category":new RegExp(key, 'i')}
                    ]
                }
                ).skip(skip).limit(pageLimit)
                .toArray(function(err, items) {
                    console.log(items);

                    res.send(items);
                });
	    });


        
        app.post('/contact',attachDB,function(req,res){
            var email = req.body.email;
           res.send(email);
        });

         app.get('/api/products',attachDB, function (req, res) {
                var el = req.db.collection('products')
                            .find({ $and:[{"Big Image":{$ne:""}},{"Name":new RegExp("T Shirt", 'i')}]} )
                            .skip(skip).limit(pageLimit)
                            .sort({"Organization":1})
                            .toArray(function(err, items) {
                                    lastItemId = items[items.length-1];
                                     console.log(lastItemId);
                                     res.send(items);
                             });
         });
        //,{'_id':{ $gt: lastItemId }}
        app.get('/api/products/:page',attachDB, function (req, res) {
          var pg = req.param("page");
          var skip = pg > 1 ? pageLimit * (pg-1) : 0;
          var el = req.db.collection('products')
                .find({ $and:[{"Big Image":{$ne:""}},{"Name":new RegExp("T Shirt", 'i')}]} )
                .skip(skip).limit(pageLimit)
                .sort({"Organization":1})
                .toArray(function(err, items) {
                         lastItemId = items[items.length-1];
                          console.log(lastItemId);
                          res.send(items);
                      });

        });
        
        http.createServer(app).listen(config.port, function(){
            var d = new Date();
            var n = d.toUTCString();
            var hash = crypto.createHash('sha256').update("value").digest('base64');
            console.log('Express server listening on port ' + config.port+ '__dirname'+__dirname+'  Time '+hash);
        });
    }
});
 
