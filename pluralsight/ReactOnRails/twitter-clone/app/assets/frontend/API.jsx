import ServerActions from "./actions/ServerActions"

export default {
  getAllTweets() {
    console.log(2,"API.getAllTweets");
    $.get("/tweets")
    .success(rawTweets => ServerActions.receiveTweets(rawTweets))
    .error(error => console.log(error));
  },

  createTweet(body){
    console.log(6,"API.createTweet");
    $.post("/tweets",{body})
    .success(rawTweet => ServerActions.receiveOneTweet(rawTweet))
    .error(error => console.log(error));

  }
}
