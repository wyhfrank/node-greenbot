#! /usr/bin/env node

var minimist = require("minimist");
var CSON = require("cson");
var Greenbot = require("..");

var argv = minimist(process.argv.slice(2));

if (argv["_"].length != 1) {
  console.log("Usage: greenbot <config.cson>");
  process.exit(1);
}

var config = CSON.parseFile(argv._[0]);
var bot = new Greenbot(config);
bot.connect();
