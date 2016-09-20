  var path = require('path');
 
  exports.index = function (req, res) {
      res.sendfile(path.resolve('public_html/stores.html'));
    };


       /* app.get('/search',attachDB, function (req, res) {
            var value = req.body.q;
            var hash = crypto.createHash('sha256').update(value).digest('base64');
            var myAffiliateID = '1014588';
            var APIToken = "10ecldpyOJEVk1za";
            var APISecretKey = "ENi0iz7z1ZBqnp3jIKi2ms2h5AYeqs1i";
           // var myTimeStamp = gmdate(DATE_RFC1123);
            res.send(value);

        });*/