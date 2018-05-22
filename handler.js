var fs = require("fs");

function Handler(){
    this.show = function(body){
        console.log("---------------------");
        var showInfo = JSON.parse(body)[0].show;

        var showGenres = "";
        for(var i=0; i<showInfo.genres.length; i++){
            showGenres += showInfo.genres[i] + "\t";
        }

        var showResults = "\nShow: " + showInfo.name + "\nGenre(s)" + showGenres + "\nRating: " + showInfo.rating +
            "\nNetwork: " + showInfo.network.name + "\nSummary: " + showInfo.summary;
        fs.appendFile("log.txt", showResults, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("\n" + showResults);
            }
        })
        
    };
    this.actor = function(body){
        console.log("---------------------");
        var actorInfo = JSON.parse(body)[0].person;

        var actorResults = "\nName: " + actorInfo.name + "\nBirthday: " + actorInfo.birthday + "\nGender: " + actorInfo.gender +
        "\nCountry: " + actorInfo.country.name + "\nURL: " + actorInfo.url;
        fs.appendFile("log.txt", actorResults, function(err){
            if(err){
                console.log(err);
            }
            else {
                console.log("\n" + actorResults);
            }
        })
    }
}

module.exports = Handler;