

 var lastItemId=0;
     var pageLimit = 48;
     var items,key,skip,pg;


     exports.contact = function (req, res) {
        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017/contacts", function(err, db) {
          if(!err) {
            console.log("We are connected");
          }
          console.log(req.body)
          db.collection('contact').insert(req.body, {w: 1}, function(err, records){
            console.log("Record added as "+records[0]._id);
             res.send(req.body);
          });

        });

       };


      exports.catergories = function (req, res, next) {
       var el = req.db.collection('products').distinct('Program Category',function(err, items) {
                       lastItemId = items[items.length-1];
                         var resultsArr = new Array();
                        for (var i = 0; i < items.length; i++) {
                          if (items[i]) {
                            resultsArr.push(items[i]);
                          }
                        }
                        res.send(resultsArr);
                });
       };

    exports.products = function (req, res, next) {
        pg = req.param("page");
        skip = pg > 1 ? pageLimit * (pg-1) : 0;
        //req.db = db;
       var el = req.db.collection('products')
                .find({ $and:[{"Big Image":{$ne:""}},{"Name":new RegExp("T Shirt", 'i')}]} )
                .skip(skip).limit(pageLimit)
               // .sort({"Organization":1})
                .toArray(function(err, items) {
                       lastItemId = items[items.length-1];
                        res.send(items);
                });
       };

    exports.search = function(req, res, next) {
       pg = req.param("page");
       key = req.param("id");
       skip = pg > 1 ? pageLimit * (pg-1) : 0;
       //req.db = db;

        var el = req.db.collection('products')
                  .find(
                  { $or:
                    [
                     {"Name":new RegExp(key, 'i')},
                     {"Big Image":new RegExp(key, 'i')},
                     {"Short Description":new RegExp(key, 'i')},
                     {"Merchant Category":new RegExp(key, 'i')}
                     ]
                  }).skip(skip).limit(pageLimit)
                  .toArray(function(err, items) {
                       console.log(items);
                       res.send(items);
                  });
        };


    exports.store = function(req, res, next){

        pg = req.param("page");
        key = req.param("id");
        skip = pg > 1 ? pageLimit * (pg-1) : 0;
       // req.db = db;

        var el = req.db.collection('products').find(
                     {
                          'Merchant Id': key

                     }).skip(skip).limit(pageLimit)
                     .toArray(function(err, items) {
                           console.log(items);
                           lastItemId = items[items.length-1];
                           res.send(items);
                        });



    };

    exports.detail = function(req, res){

  
        key = req.param("id");
        //req.db = db;

        var el = req.db.collection('products').find(
                     {
                          'productId': key

                     }).limit(1)
                     .toArray(function(err, items) {
                          // console.log(items);
                          
                           res.send(items[0]);
                        });



    };
