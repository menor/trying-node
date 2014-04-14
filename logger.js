/*jslint node: true */
'use strict';

var logger = function( req, res, next ) {
  console.log( req.method + ' ' + req.url );
  next();
};

module.exports = logger;