import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receiveTweets(rawTweets) {
    console.log(3,"ServerActions.receiveTweets");
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_TWEETS,
        rawTweets
      })
  },

  receiveOneTweet(rawTweet){
    console.log(7,"ServerActions.receiveOneTweet");
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_ONE_TWEET,
        rawTweet
      })

  }
}
