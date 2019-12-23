console.log("the follow bot!");
var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);

twituser = { screen_name: "AshishR43515978" };

T.get("followers/list", twituser, getFollowers);

function getFollowers(err, data, response) {
  //console.log(data);
  let followers = data.users;
  console.log(followers[0].name);
  let name = followers[0].name;
  let screen_name = followers[0].screen_name;
  tweetIt("@" + screen_name + " " + "thank you for following me");
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
