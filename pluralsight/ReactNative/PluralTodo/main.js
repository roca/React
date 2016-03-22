import React from 'react-native';
import TaskList from './TaskList';

const {
  AppRegistry,
  Component,
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
        <TaskList />
      );
  }

}

AppRegistry.registerComponent('main', () => PluralTodo);
