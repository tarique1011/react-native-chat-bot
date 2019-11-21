import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MessageBox } from '../Components'

class ChatScreen extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          userType: 'user',
          message: 'Hey there!'
        },
        {
          userType: 'bot',
          message: 'Hey there user!'
        }
      ],
      currentMessage: ''
    }
  }

  handleSend() {
    this.state.messages.push({
      userType: 'user',
      message: this.state.currentMessage
    })
    this.setState({ currentMessage: '' })
  }

  renderButtonInputBar() {
    return (
      <View style={styles.bottomInputBar}>
        <TextInput
          value={this.state.currentMessage}
          onChangeText={currentMessage => this.setState({ currentMessage })}
          placeholder="Type Something..."
          style={styles.inputBar}
        />
        <TouchableOpacity
          onPress={() => this.handleSend()}
          style={styles.sendButton}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatView}>
          <FlatList
            data={this.state.messages}
            renderItem={({ item }) => (
              <MessageBox userType={item.userType} message={item.message} />
            )}
          />
        </View>
        {this.renderButtonInputBar()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chatView: {
    height: '90%',
    paddingTop: '5%',
    paddingHorizontal: '3%'
  },
  bottomInputBar: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputBar: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgb(200,200,200)',
    paddingHorizontal: 20
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1F8EFE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendIcon: {
    marginLeft: 4
  }
})

export { ChatScreen }
