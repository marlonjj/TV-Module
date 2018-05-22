var request = require("request");
var Handler = require("./handler.js");

var handler = new Handler();

function Chicken() {

    this.shows = function() {

        var find = "";
        var pro = "http://api.tvmaze.com/search/shows?q=";

        for (var i = 3; i < process.argv.length; i++) {
          find += process.argv[i] + "+";
        }
    
        var searchShow = pro + find;
        request(searchShow, function(error, response, body) { 
            handler.show(body);
          });
        }

      this.actors = function() {

        var find = "";
        var pro = "http://api.tvmaze.com/search/people?q=";

        for (var i = 3; i < process.argv.length; i++) {
          find += process.argv[i] + "+";
        }

        var searchActor = pro + find;

        request(searchActor, function(error, response, body) { 
            handler.actor(body);
          });

      }

  }



module.exports = Chicken;