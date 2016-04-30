import React from 'react-native';

const {
  View,
  Text,
  TouchableHighlight,
  Image,
} = React;

const localStyle = React.StyleSheet.create({
    doneButton: {
        borderRadius: 5,
        padding: 5,
    },
    icon: {
        width: 30,
        height: 30,
    },
});


export default function render(styles) {
    return (
      <View style={styles.container}>
        <Text
            style={styles.label}
        >{this.props.todo.task}
        </Text>

      <TouchableHighlight
          onPress={this.onDonePressed.bind(this)}
          style={localStyle.doneButton}
          underlayColor="#ddd"
      >
          <Image
              source={require('../images/done.png')}
              style={localStyle.icon}
          />
      </TouchableHighlight>
      </View>
    );
}
