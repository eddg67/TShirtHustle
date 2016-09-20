  var path = require('path');
 
  exports.index = function (req, res) {
                 console.log(path.join(__dirname+'/search.html'))
                  res.sendfile(path.resolve('public_html/search.html'));
                };