import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';

function ApplyNowScreen(props) {

    const data = [
        {
            imageSource: require('../../assets/images/app1.png'),
            title1: 'No physical',
            title2: 'exam'
        },
        {
            imageSource: require('../../assets/images/app2.png'),
            title1: 'Coverage up to',
            title2: '$ 1.5 million'
        },
        {
            imageSource: require('../../assets/images/app2.png'),
            title1: 'Terms upto',
            title2: '30 years'
        },
    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('MyAccountScreen')} >
                    <MaterialCommunityIcons name="account-circle-outline" style={{ fontSize: RFPercentage(4.1) }} color={Colors.greyNew} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                    <FontAwesome5 name="question-circle" style={{ fontSize: RFPercentage(3.5) }} color={Colors.greyNew} />
                </TouchableOpacity>
            </View>

            <Text style={styles.heading} >
                Life
            </Text>

            {/* Scroll Starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Center Text Line */}
                    <View style={styles.centerTextLineContainer} >
                        <Text style={{ color: Colors.greyNew, fontSize: RFPercentage(3) }} >
                            Help future-proof your family with
                        </Text>
                        <Text style={{ marginTop: RFPercentage(0.1), color: Colors.greyNew, fontSize: RFPercentage(3) }} >
                            term life insurance
                        </Text>
                    </View>

                    {/* Center Images with Text below */}
                    <View style={styles.centerImagesContainer} >
                        {data.map((item, i) => (
                            <View key={i} style={{ marginLeft: !i == 0 ? RFPercentage(4) : 0, justifyContent: 'flex-start', alignItems: 'center' }} >
                                <Image style={{ width: RFPercentage(12), height: RFPercentage(12) }} source={item.imageSource} />
                                <Text style={{ marginTop: RFPercentage(1), color: Colors.greyNew, fontSize: RFPercentage(2.1) }} >
                                    {item.title1}
                                </Text>
                                <Text style={{ marginTop: RFPercentage(0.3), color: Colors.greyNew, fontSize: RFPercentage(2.1) }} >
                                    {item.title2}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
                        <MyAppButton
                            title="Apply Now"
                            padding={RFPercentage(2.2)}
                            backgroundColor={Colors.pink}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(1)}
                            width={"40%"}
                        />
                    </View>

                    <View style={styles.startingFromContainer} >
                        <View style={styles.pinkBox} >
                            <Octicons name="check" style={{ fontSize: RFPercentage(1.4) }} color={Colors.white} />
                        </View>
                        <Text style={{ marginLeft: RFPercentage(0.5), color: Colors.greyNew, fontSize: RFPercentage(1.9) }} >
                            Starting from $9/month
                        </Text>
                    </View>

                </View>
            </ScrollView>

            {/* Bottom Tab */}
            <BottomTab props={props} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.lightWhite
    },
    navContainer: {
        marginTop: RFPercentage(2),
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    heading: {
        color: Colors.black,
        fontSize: RFPercentage(3.2),
        marginTop: RFPercentage(4),
        fontWeight: '600'
    },
    centerTextLineContainer: {
        marginTop: RFPercentage(4),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    centerImagesContainer: {
        marginTop: RFPercentage(6),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    startingFromContainer: {
        marginTop: RFPercentage(5),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    pinkBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.pink,
        width: RFPercentage(2),
        height: RFPercentage(2),
        borderRadius: RFPercentage(10)
    }
})

export default ApplyNowScreen;