import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ChatScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatView}>
          <Text>ChatView</Text>
        </View>
        <View style={styles.bottomView}>
          <Text>BottomButton</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatView: {
    height: '90%',
    backgroundColor: 'lightblue',
  },
  bottomView: {
    height: '10%',
    backgroundColor: 'yellow',
  },
});

export {ChatScreen};
