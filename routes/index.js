  var path = require('path');
 
  exports.index = function (req, res) {
      res.sendfile(path.resolve('public_html/index.html'));
    };


    exports.detail = function (req, res) {
      res.sendfile(path.resolve('public_html/detail.html'));
    };

    exports.about = function (req, res) {
      res.sendfile(path.resolve('public_html/about.html'));
    };


