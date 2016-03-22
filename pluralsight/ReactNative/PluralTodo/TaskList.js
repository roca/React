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
          <View style={styles.container}>
            <Text>Hi, this is a TaskList!ccccc</Text>
          </View>
      );
    }
}


export default TaskList;
