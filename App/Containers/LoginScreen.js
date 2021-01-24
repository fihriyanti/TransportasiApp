import { Button, Input, Item } from 'native-base'
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { Images } from '../Themes'
// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image source={Images.logoPon} style={styles.logo} />
          <Text style={styles.teks}>MOBILE WORKFORCE ACCOMODATION APP</Text>
          <Item regular style={styles.item1}>
            <Input placeholder='Username'/>
          </Item>
          <Item regular style={styles.item2}>
            <Input placeholder='Password'/>
          </Item>
          <Button block warning style={styles.btnLogin}
          onPress={() => {this.props.navigation.navigate('BerandaScreen')}}>
            <Text style={styles.teksLogin}>Login</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default (LoginScreen)