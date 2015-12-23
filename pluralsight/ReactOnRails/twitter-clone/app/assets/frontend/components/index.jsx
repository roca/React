import React from "react";
import { Link } from "react-router";
import TweetBox from "./TweetBox";
import TweetsList from "./TweetsList";
import TweetStore from "../stores/TweetStore";

import TweetActions from "../actions/TweetActions";
TweetActions.getAllTweets();


// let mockTweets = [
//   {id: 1, name: 'Robert', body: 'first tweet'},
//   {id: 2, name: 'Yelena', body: 'first tweet'},
//   {id: 3, name: 'Liya',   body: 'first tweet'},
//   {id: 4, name: 'Steve',  body: 'first tweet'},
//   {id: 5, name: 'John',   body: 'first tweet'},
//   {id: 6, name: 'Romel',  body: 'first tweet'}
// ]

let getAppState = () => {
  return {tweetsList: TweetStore.getAll()}
}

export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error));

    TweetStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    console.log(5,"Main._onChange");
    this.setState(getAppState());
  }

  render() {
    return (
      <div className="container">
        <Link to="/follow">Who to follow</Link>
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
