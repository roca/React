import React from 'react-native';
import TaskList from './TaskList';

const {
  AppRegistry,
  Component,
  Navigator,
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
              {
                  task: 'Learn Redux',
              },
          ],
      };
  }

  onAddStarted() {
      this.nav.push({
          name: 'taskform',
      });
  }

  renderScene(route, nav) {
      switch (route.name) {
      case 'taskform':
          return (
            <Text
                style={{
                    paddingTop: 20,
                }}
            >Add form comes here!</Text>
          );
      default:
          return (
            <TaskList
                onAddStarted={this.onAddStarted.bind(this)}
                todos={this.state.todos}
            />
          );
      }
  }

  configureScene() {
      return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
      return (
          <Navigator
              configureScene={this.configureScene}
              initialRoute={{ name: 'tasklist', index: 0 }}
              ref={((nav) => {
                  this.nav = nav;
              })}
              renderScene={this.renderScene.bind(this)}
          />
      );
  }

}

AppRegistry.registerComponent('main', () => PluralTodo);
