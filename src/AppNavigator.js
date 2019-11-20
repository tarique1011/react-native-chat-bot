import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'
import { createAppContainer } from 'react-navigation'
import { WelcomeScreen, ChatScreen } from './Screens'

const RootNavigation = createAnimatedSwitchNavigator(
  {
    Welcome: {
      screen: WelcomeScreen
    },
    Chat: {
      screen: ChatScreen
    }
  },
  {
    initialRouteName: 'Chat'
  }
)

const AppNavigator = createAppContainer(RootNavigation)

export default AppNavigator
