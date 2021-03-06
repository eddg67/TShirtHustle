

 var lastItemId=0;
     var pageLimit = 48;
     var items,key,skip,pg;

     function random (low, high) {
      return Math.floor(Math.random() * (high - low + 1) + low);
    }


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
        var low = random(0,5);
        var high = random(low,10);
        skip = pg > 1 ? pageLimit * (pg-1) : 0;
        skip = !skip ?  random(low,high) : skip;

       var el = req.db.collection('products').aggregate([ 
          { $match:{ $and:[
            {"Big Image":{$ne:""}},
            { $or:
              [{"Name":/T Shirt/i},{"Name":/T-Shirt/i},{"Name":/TShirt/i},{"Name":/Tee/i} ] 
            }
            ]  }}, 
          { $group: { _id: { Name:'$Name',productId:'$productId','Big Image':'$Big Image',Link:'$Link','Short Description':'$Short Description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }},
          { $skip : skip },
          { $limit : pageLimit }
           ]).toArray(function(err, items) {
                       lastItemId = items[items.length-1];
                        res.send(items);
                }); 

            
       };

    exports.search = function(req, res, next) {
       pg = req.param("page");
       key = req.param("id");
       skip = pg > 1 ? pageLimit * (pg-1) : 0;

        var el = req.db.collection('products').aggregate([ 
          { $match:{ $and:[
            {"Big Image":{$ne:""}},
            { $or:[ 
              {"Name":new RegExp(key, 'i')},
              {"Big Image":new RegExp(key, 'i')},
              {"Short Description":new RegExp(key, 'i')},
              {"Merchant Category":new RegExp(key, 'i')} 
              ] 
            }]  }}, 
          { $group: { _id: { Name:'$Name',productId:'$productId','Big Image':'$Big Image',Link:'$Link','Short Description':'$Short Description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }} ])
          .skip(skip).limit(pageLimit)
                  .toArray(function(err, items) {
                      lastItemId = items[items.length-1];
                       res.send(items);
                  });
        };


    exports.store = function(req, res, next){

        pg = req.param("page");
        key = req.param("id");
        skip = pg > 1 ? pageLimit * (pg-1) : 0;

       var el = req.db.collection('products').aggregate([ 
          { $match:{ 'Merchant Id': key}},
          { $group: { _id: { Name:'$Name',productId:'$productId','Big Image':'$Big Image',Link:'$Link','Short Description':'$Short Description' },count: { $sum:  1 } } },
          { $match: { count: { $lt : 2 } }} ])
          .skip(skip).limit(pageLimit)
                  .toArray(function(err, items) {
                      lastItemId = items[items.length-1];
                       res.send(items);
                  });
    };

    exports.detail = function(req, res){
        key = req.param("id");
        var el = req.db.collection('products').find(
                     {'productId': key})
                     .limit(1)
                     .toArray(function(err, items) {
                      res.send(items[0]);
            });



    };
