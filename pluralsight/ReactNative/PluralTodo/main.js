const React = require('react-native');
const {
  AppRegistry,
  Component,
  Text,
} = React;

class PluralTodo extends Component {
  constructor(props, context) {
      super(props, context);
      this.state = {
          todos: [
              {
                  task: 'Learn React Native',
              },
          ],
      };
  }

  render() {
      return (
      <Text>Hello there, again!</Text>
      );
  }

}

AppRegistry.registerComponent('main', () => PluralTodo);
