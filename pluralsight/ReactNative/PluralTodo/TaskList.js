import React from 'react-native';
const {
  View,
  Text,
} = React;

const styles = React.StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

class TaskList extends React.Component {
    render() {
        return (
          <View styles={styles.container}>
            <Text>Hi, this is a TaskList!</Text>
          </View>
      );
    }
}


export default TaskList;
