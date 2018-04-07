require("dotenv").config();

// Load exports from keys.js file which has Twitter auth keys
var keys = require("./keys.js");
var twitterCredentials = keys.twitter;
var spotifyCredentials = keys.spotify;

// node liri.js 
var command = process.argv[2];
var query = process.argv[3];

// Functions
twitterThisTweet() {
    var myTweets = function (query) {
        // Load twitter module from npm
        var Twitter = require('twitter');

        // From exports of keys.js file
        var client = new Twitter({ twitterCredentials });

        // Twitter API parameters
        var params = {
            screen_name: juhipatel608,
            count: 15
        };
    }

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (error) {
            console.log('Error occurred: ' + error);
        }
        else {
            console.log("Juhis Recent Tweets");
            console.log("");

            for (var i = 0; i < tweets.length; i++) {
                console.log("( #" + (i + 1) + " )  " + tweets[i].text);
                console.log("Created:  " + tweets[i].created_at);
                console.log("");
            }
        }
    });
};

function spotifyThisSong() {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(spotifyCredentials);


//  if(trackQuery === undefined) {
//         trackQuery = "song song ";
//     }
//     spotify.search({ type: 'track', query: trackQuery }, function(error, data) {
// 	    if(error) { 
// 	        console.log('Error occurred: ' + error);
// 	    } else{}

//     }



    spotify.search({ type: 'track', query: query }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items);

        for (var i = 0; i < data.tracks.items.length; i++) {

            // console.log(data.tracks.items[i])
            console.log("Song:         " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album:        " + data.tracks.items[0].album.name);



        }
    });


}



        var searchThisMovie = function(movieQuery) {
            // Load request npm module
            var request = require("request");
        
            // if query that is passed in is undefined, Mr. Nobody becomes the default
            if(movieQuery === undefined) {
                movieQuery = "mr nobody";
            }
        
            // HTTP GET request
            request("http://www.omdbapi.com/?t=" + movieQuery + "&apikey=trilogy", function(error, response, body) {
              if (!error && response.statusCode === 200) {

                console.log("* Title of the movie:         " + JSON.parse(body).Title);
                console.log("* Year the movie came out:    " + JSON.parse(body).Year);
                console.log("* IMDB Rating of the movie:   " + JSON.parse(body).imdbRating);
                console.log("* Country produced:           " + JSON.parse(body).Country);
                console.log("* Language of the movie:      " + JSON.parse(body).Language);
                console.log("* Plot of the movie:          " + JSON.parse(body).Plot);
                console.log("* Actors in the movie:        " + JSON.parse(body).Actors);
              };        



              switch( command ){
                case "spotify-this":
                spotifyThisSong();
                break; 
            
                case "twitter-this":
                twitterThisTweet();
                break;
            
                case "movie-this":
                searchThisMovie ();
                break;
            
            }
            
            

