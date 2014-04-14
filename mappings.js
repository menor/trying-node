/*jslint node: true */
'use strict';

var data = {
    g: 'http://www.google.com'
};

var mappings = {
    get: function( url ){
        var alias = url.substring(1);

        if ( !data[alias] ) {
            return undefined;
        }

        return data[alias];
    }
};


// This is what this file will export when it is required
module.exports = mappings;