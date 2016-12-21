  var path = require('path');
  var ejs = require('ejs');
  //var api = require(path.resolve('public_html/routes/api'));
 
  exports.index = function (req, res) {
      var opts = {title: 'Great Tees TShirt Hustle',description:'funny t-shirts, funny t shirts, t-shirts,top online retailers, funny shirts, t shirts, funny tshirts, tshirts, funny tees, funny tee shirts, t shirt, t-shirt, tee shirts, shirts, hustle'};
      res.render(path.resolve('public_html/pages/index'),opts);
    };


    exports.detail = function (req, res) {
      id = req.param("id");
      var resource = "/api/detail/" + id;

      var key = req.param("id");
      var product = null;
        //req.db = db;

        var el = req.db.collection('products').find(
                     {
                          'productId': key

                     }).limit(1)
                     .toArray(function(err, items) {
                           //console.log(items);
                           product = items[0];
                            console.log(product);
                            if(product){}

                             var opts = (product)? 
                             {
                              title: product['Name'],
                              description:product['Short Description'],
                              img: product['Big Image']
                              }
                              :
                              {   
                                img:'',              
                                title: 'Great Tees TShirt Hustle',
                                description:'funny t-shirts, funny t shirts, t-shirts,top online retailers, funny shirts, t shirts, funny tshirts, tshirts, funny tees, funny tee shirts, t shirt, t-shirt, tee shirts, shirts, hustle'
                              };
                            res.render(path.resolve('public_html/pages/detail'),opts);
                          
                        });

      console.log(product);
    
 
     // 
      //res.sendfile(path.resolve('public_html/detail.html'));
    };

    exports.about = function (req, res) {
      var opts = {title: 'Great Tees TShirt Hustle',description:'funny t-shirts, funny t shirts, t-shirts,top online retailers, funny shirts, t shirts, funny tshirts, tshirts, funny tees, funny tee shirts, t shirt, t-shirt, tee shirts, shirts, hustle'};
      res.render(path.resolve('public_html/pages/about'),opts);
      //res.render('pages/index', { title: 'The index page!' })
      //res.sendfile(path.resolve('public_html/about.html'));
    };


