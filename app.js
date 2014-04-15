/*jslint node: true */
'use strict';

// Integrated Modules
var http = require( 'http' );

// Third Party Modules
var express = require( 'express' );

// Custom Modules
var logger = require( './logger' ),
    mappings = require( './data/mappings' );

var app = express();

app.use( logger( 'redirector' ) );

app.get( '/:alias', function ( req, res ) {
	var mapping = mappings.get( req.params.alias, function( err, mapping){

	if  ( err ) {
		res.writeHead(404);
		return res.end();
	}

	res.writeHead( 302, {
		location: mapping
	});
	res.end();
	});
});

http.createServer( app ).listen( 3000 );