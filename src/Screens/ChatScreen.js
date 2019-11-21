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
import LottieView from 'lottie-react-native'

class ChatScreen extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      messageTemplates: ['Hahahahha', 'Sahi mein!', 'Tagda'],
      currentMessage: '',
      waiting: false
    }
  }

  handleSend() {
    this.state.messages.push({
      userType: 'user',
      message: this.state.currentMessage
    })
    this.setState({ currentMessage: '', waiting: true })

    const random = Math.floor(Math.random() * 10)
    const message = this.state.messageTemplates[random % 3]

    setTimeout(() => {
      this.state.messages.push({
        userType: 'bot',
        message
      })
      this.setState({ waiting: false })
    }, 3000)
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

  renderFooter() {
    if (this.state.waiting) {
      return (
        <View
          style={{
            width: '20%',
            height: 30,
            backgroundColor: '#A3A3A3',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 0,
            marginVertical: 5
          }}
        >
          <LottieView
            style={{
              height: 50
            }}
            source={require('./loader.json')}
            autoPlay
            loop
          />
        </View>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.chatView}>
          <FlatList
            ref={ref => (this.flatList = ref)}
            onContentSizeChange={() =>
              this.flatList.scrollToEnd({ animated: true })
            }
            data={this.state.messages}
            renderItem={({ item }) => (
              <MessageBox userType={item.userType}>{item.message}</MessageBox>
            )}
            ListFooterComponent={this.renderFooter()}
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
    paddingVertical: '5%',
    paddingHorizontal: '5%'
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
