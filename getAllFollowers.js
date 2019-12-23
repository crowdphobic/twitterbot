console.log("the follow bot!");
var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);

twituser = { screen_name: "AshishR43515978" };

T.get("followers/list", twituser, getFollowers);

function getFollowers(err, data, response) {
  let followers = data.users;
  console.log(data);
  for (let i = 0; i < followers.length; i++) {
    console.log(followers[i].name);
    console.log(followers[i].screen_name);
  }
}
