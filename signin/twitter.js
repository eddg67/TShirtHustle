"use strict";

var Twitter = require("node-twitter-api"),
    config = require('../config')()
	Promise = require("bluebird");

module.exports = new function() {
	this._twitter = new Twitter({
		consumerKey: config.twitter.consumerKey,
		consumerSecret: config.twitter.consumerSecret,
		callback: config.twitter.callback
	});

	this.requestToken = function() {
		return new Promise(function(resolve, reject) {
			this._twitter.getRequestToken(function(err, requestToken, requestSecret) {
				if (err){
					console.log(err)
					reject(err);
				}else {
					this._requestToken = requestToken;
					this._requestSecret = requestSecret;
					//
					resolve(requestToken);
				}
			}.bind(this));
		}.bind(this));
	};

	this.accessToken = function(token, verifier) {
		var secret = this._requestSecret;

		this._verifier = verifier;

		return new Promise(function(resolve, reject) {
			this._twitter.getAccessToken(token, secret, verifier, function(err, accessToken, accessSecret) {
				if (err)
					reject(err);
				else {
					//this._accessToken = accessToken;
					//this._accessSecret = accessSecret;
					console.log(accessToken);
					console.log(accessSecret);

					resolve(accessToken);
				}
			});
		}.bind(this));
	};

	this.verifyCredentials = function(accessToken) {
		var accessSecret = this._accessSecret;

		return new Promise(function(resolve, reject) {
			this._twitter.verifyCredentials(accessToken, accessSecret, function(err, user) {
				if (err) reject(err);
				else resolve(user);
			});
		}.bind(this));
	};
};