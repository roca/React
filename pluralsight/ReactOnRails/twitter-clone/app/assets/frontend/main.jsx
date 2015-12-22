import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";


// let mockTweets = [
//   {id: 1, name: 'Robert', body: 'first tweet'},
//   {id: 2, name: 'Yelena', body: 'first tweet'},
//   {id: 3, name: 'Liya',   body: 'first tweet'},
//   {id: 4, name: 'Steve',  body: 'first tweet'},
//   {id: 5, name: 'John',   body: 'first tweet'},
//   {id: 6, name: 'Romel',  body: 'first tweet'}
// ]

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetList: []};
  }
  addTweet(tweetToAdd){
      let newTweetList = this.state.tweetList;
      newTweetList.unshift({id: Date.now(), name: 'Guest',body: tweetToAdd});

      this.setState({tweetList: newTweetList});
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetList tweets={this.state.tweetList} />
      </div>
    );
  }
}




let documentReady = () => {
  let reactNode = document.getElementById('react')
    if (reactNode) {
      ReactDOM.render(<Main />,reactNode);
    }
};


$(documentReady);
