 var mongoClient = require('mongodb').MongoClient;

mongoClient.connect("mongodb://localhost:27017/ss_products", function(err, db) {


  if(err) {
     console.log('Sorry, there is no mongo db server running.');
   } else {

    exports.products = function (req, res) {

       var pg = req.param("page");
       var skip = pg > 1 ? pageLimit * (pg-1) : 0;
       var el = req.db.collection('products')
                .find({ $and:[{"Big Image":{$ne:""}},{"Name":new RegExp("T Shirt", 'i')}]} )
                .skip(skip).limit(pageLimit)
                .sort({"Organization":1})
                .toArray(function(err, items) {
                       lastItemId = items[items.length-1];
                        res.send(items);
                });
       };

    }
});