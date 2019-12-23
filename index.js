var Twit = require("twit");
const config = require("./config.js");

var T = new Twit(config);

params = {
  q: "salesforce",
  count: 2
};
T.get("search/tweets", params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  console.log(data);
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
