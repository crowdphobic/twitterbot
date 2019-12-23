var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);

tweet = {
  status: "#welcome  #hmm"
};

T.post("statuses/update", tweet, tweeted);

function tweeted(err, data, response) {
  if (err) console.log("some error occurs");
  else console.log("smoothly working");
}
