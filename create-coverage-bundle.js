#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var Builder = require("jspm").Builder;
var builder = new Builder();
var systemIstanbul = require('systemjs-istanbul-hook');
var parseArgs = require('minimist');

systemIstanbul.hookSystemJS(builder.loader);
builder.bundle('lib/main', path.join(__dirname, '../lib/main-bundle-systemIstanbul.js')).then(function() {
    var originalSources = systemIstanbul.originalSources;
    fs.writeFileSync('original-source-data.json', JSON.stringify(originalSources));
});

