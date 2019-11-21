import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class MessageBox extends Component {
  render() {
    const { children, userType } = this.props
    return (
      <View
        style={[
          styles.messageBox,
          userType === 'user' ? styles.userMessageBox : styles.botMessageBox
        ]}
      >
        <Text style={styles.messageText}>{children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageBox: {
    maxWidth: '60%',
    borderRadius: 15,
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    minHeight: 30
  },
  userMessageBox: {
    backgroundColor: '#1F8EFE',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0
  },
  botMessageBox: {
    backgroundColor: '#A3A3A3',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0
  },
  messageText: {
    color: 'white',
    fontSize: 16
  }
})

export { MessageBox }
