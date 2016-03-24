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
              {
                  task: 'Learn Redux',
              },
          ],
      };
  }

  onAddStarted() {
      console.log('on add started');
  }

  render() {
      return (
        <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
        />
      );
  }

}

AppRegistry.registerComponent('main', () => PluralTodo);
