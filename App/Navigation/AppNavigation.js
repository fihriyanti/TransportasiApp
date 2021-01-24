import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import BerandaScreen from '../Containers/BerandaScreen'
import LoginScreen from '../Containers/LoginScreen'
import SplashScreen from '../Containers/SplashScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  BerandaScreen: { screen: BerandaScreen },
  LoginScreen : { screen: LoginScreen },
  SplashScreen: { screen: SplashScreen},
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
