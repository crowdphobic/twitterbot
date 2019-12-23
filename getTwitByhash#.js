var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);

var stream = T.stream("statuses/filter", {
  track: "akshay kumar",
  language: "en"
});

stream.on("tweet", function(tweet) {
  console.log(tweet);
});
