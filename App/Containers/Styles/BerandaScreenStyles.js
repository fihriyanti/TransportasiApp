import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    bgColor: {
        flex: 1,
        backgroundColor: '#9b0000',
    },
    container: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    teks: {
        color: 'white',
        fontSize: 20,
    },
    logo: {
        height: Metrics.images.logo,
        width: Metrics.images.ikon,
        resizeMode: 'contain'
    },
    modal: {
        backgroundColor: 'white', 
        marginTop: 300, 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        flex: 1,
    },
    kabTxt: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    see: {
      color: 'grey',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    card: {
      borderRadius: 10,
      backgroundColor: '#f4f5f7',
      width: '30%',
      height: 80,
      padding: 10,
    },
    cardPie: {
        padding: 10, 
        borderRadius: 20,
        marginTop: 20,
    },
    titleCard: {
        color: '#959595',
        fontWeight: 'bold'
    },
    angkaS: {
        color: '#52d0ff',
        fontSize: 25,
        textAlign: 'center'
    },
    angkaB: {
        color: '#ee5555',
        fontSize: 25,
        textAlign: 'center'
    },
})