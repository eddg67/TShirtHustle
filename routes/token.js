"use strict";

var twitter = require("../signin/twitter");

exports.getRequestToken = function (req, res)  {
   var token = req.query.oauth_token,
			verifier = req.query.oauth_verifier;
        twitter.requestToken().then(function(requestToken) {
            //console.log(requestToken)
            res.send("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
            //res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
        }).catch(function(err) {
            res.status(500).send(err);
        });
       
};

exports.getAccessToken = function (req, res)  {
   var token = req.query.oauth_token,
			verifier = req.query.oauth_verifier;
         twitter.accessToken(token, verifier).then(function(accessToken,accessSecret) {
             console.log(accessToken)
             console.log(accessSecret)
             twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
                    if (err)
                        res.status(500).send(err);
                    else
                        res.send(user);
                });
        }).then(function(user) {
            res.send(user);
        }).catch(function(err) {
            res.status(500).send(err);
        });

};