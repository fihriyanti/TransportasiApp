import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/SplashScreenStyles'

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("LoginScreen");
        }, 3000);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Image source={Images.logoPon} style={styles.logo} />
                    <Text style={styles.teks}>MOBILE WORKFORCE TRANSPORTATION APP</Text>
                </View>
            </View>
        )
    }
}
