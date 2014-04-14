/*jslint node: true */
'use strict';

var data = {
    g: 'http://www.google.com'
};

var mappings = {
    get: function( url, callback ){
        var alias = url.substring(1);

        if ( !data[alias] ) {
            // This is standard in Node first parameter is the error
            // Second parameter is what we are returning, since it is
            // undefined we can leave it blank
            return callback( new Error( 'URL not found.' ));
        }

        // Same here, first is the error (null in this case since there
        // are no errors) and second is what we want to return
        callback( null, data[alias] );
    }
};


// This is what this file will export when it is required
module.exports = mappings;