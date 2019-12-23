console.log("the follow bot!");
var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);
var count = 0;
var stream = T.stream("statuses/sample");
stream.on("tweet", function(tweet) {
  responding();
});

function responding() {
  twituser = { screen_name: "AshishR43515978" };
  T.get("followers/list", twituser, getFollowers);
  function getFollowers(err, data, response) {
    let followers = data.users;
    if (count < followers.length) {
      for (let i = 0; i < followers.length; i++) {
        let screen_name = followers[i].screen_name;
        tweetIt("@" + screen_name + " " + "thank you for following me");
      }
      count = followers.length;
    }
  }
}

function tweetIt(txt) {
  tweet = {
    status: txt
  };
  T.post("statuses/update", tweet, tweeted);
  function tweeted(err, data, response) {
    if (err) console.log("some error occurs");
    else console.log("smoothly working");
  }
}
