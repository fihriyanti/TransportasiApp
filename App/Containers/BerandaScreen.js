import React, { Component } from 'react'
import { Image, Text, View, Modal } from 'react-native'
import { Images } from '../Themes'
import { Icon, Card } from 'native-base'
import Pie from 'react-native-pie'

import styles from './Styles/BerandaScreenStyles'

export default class BerandaScreen extends Component {
    render() {
        return (
            <View style={styles.bgColor}>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.teks}>Welcome</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}> Muhammad Wahyu Hardiansyah</Text>
                        <Text style={styles.teks}> To</Text>
                    </View>
                    <Image source={Images.logoPon} style={styles.logo} />
                    <Text style={styles.teks}>Accomodation App</Text>
                </View>
                <Modal
                    transparent={true}
                    visible={true}
                >
                    <View style={styles.modal}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>You are assigned to cluster</Text>
                                <Text style={styles.kabTxt}>Kabupaten Mimika</Text>
                            </View>
                            <View>
                                <Icon type='MaterialIcons' name='account-circle' />
                            </View>
                        </View>
                        <Text style={styles.see}>What do you want to see?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <Card style={styles.card}>
                                <View>
                                    <Text style={{ alignSelf: 'center' }}>Kontingen</Text>
                                </View>
                            </Card>
                            <Card style={styles.card}>
                                <View>
                                    <Text style={{ alignSelf: 'center' }}>Kontingen</Text>
                                </View>
                            </Card>
                            <Card style={styles.card}>
                                <View>
                                    <Text style={{ alignSelf: 'center' }}>Kontingen</Text>
                                </View>
                            </Card>
                        </View>
                        <Card style={styles.cardPie}>
                            <Text style={styles.titleCard}>Persentase Penerima Kunci</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <Text>Sudah Terima Kunci</Text>
                                    <Text style={styles.angkaS}>75%</Text>
                                </View>
                                <View>
                                    <Pie
                                        radius={50}
                                        innerRadius={30}
                                        sections={[
                                            {
                                                percentage: 25,
                                                color: '#ee5555',
                                            },
                                            {
                                                percentage: 75,
                                                color: '#52d0ff',
                                            },
                                        ]}
                                        strokeCap={'butt'}
                                    />
                                </View>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
                                    <Text>Sudah Terima Kunci</Text>
                                    <Text style={styles.angkaB}>25%</Text>
                                </View>
                            </View>
                        </Card>
                        <Card style={styles.cardPie}>
                            <Text style={styles.titleCard}>Jumlah Cabor yang sudah terima</Text>
                            
                        </Card>
                    </View>
                </Modal>
            </View>
        )
    }
}