// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
var request = require("request");
var fs = require("fs");
var handler = require("./handler.js");
var api = require("./api.js");

var pro = process.argv[2];
// var find = process.argv[3];
var API = new api();

switch (pro) {
  
  case "actor":
  API.actors();
  break;
  case "show":
  API.shows();
  break;

}
