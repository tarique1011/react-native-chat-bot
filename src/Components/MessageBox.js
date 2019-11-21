import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MessageBox extends Component {
  render() {
    const { message, userType } = this.props
    return (
      <View
        style={[
          styles.messageBox,
          userType === 'user' ? styles.userMessageBox : styles.botMessageBox
        ]}
      >
        <Text style={styles.messageText}>{message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageBox: {
    maxWidth: '60%',
    borderRadius: 10,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  userMessageBox: {
    backgroundColor: '#1F8EFE',
    alignSelf: 'flex-end'
  },
  botMessageBox: {
    backgroundColor: '#A3A3A3',
    alignSelf: 'flex-start'
  },
  messageText: {
    color: 'white',
    fontSize: 16
  }
})

export { MessageBox }
