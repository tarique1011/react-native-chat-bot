import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MessageBox extends Component {
  render() {
    const { message } = this.props
    return (
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageBox: {
    maxWidth: '60%',
    backgroundColor: '#1F8EFE',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    marginVertical: 10
  },
  messageText: {
    color: 'white',
    fontSize: 16
  }
})

export { MessageBox }
