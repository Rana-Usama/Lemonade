import React from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

function MyAccountScreen(props) {
    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={styles.navContainer} >
                <TouchableOpacity onPress={() => props.navigation.navigate("ApplyNowScreen")} activeOpacity={0.6} style={{ position: 'absolute', left: 0 }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color="black" />
                </TouchableOpacity>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight: '400' }} >
                    Settings
                </Text>
                <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: 0 }} >
                    <Text style={{ color: Colors.pink, fontSize: RFPercentage(2.4), fontWeight: '500' }} >
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>

            {/* My Account Text */}
            <Text style={{ marginTop: RFPercentage(5.5), color: Colors.greyNew, fontSize: RFPercentage(3), fontWeight: '500' }} >
                My Account
            </Text>


            {/* Scroll Starts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* User Detail */}
                    <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            Rana Usama
                        </Text>
                        <Text style={{ marginTop: RFPercentage(0.8), color: Colors.greyNew, fontSize: RFPercentage(2) }} >
                            Joined on Jan4,2022
                        </Text>
                    </View>

                    {/* Saperator */}
                    <View style={{ opacity: 0.2, marginTop: RFPercentage(4), width: '90%', height: RFPercentage(0.1), backgroundColor: Colors.greyNew, alignSelf: 'center' }} />

                    {/* Email */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', justifyContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.greyNew, fontSize: RFPercentage(2.3), fontWeight: Platform.OS == 'android' ? 'bold' : '400' }} >
                            EMAIL
                        </Text>
                        <Text style={{ marginTop: RFPercentage(0.8), color: Colors.black, fontSize: RFPercentage(2), fontWeight: Platform.OS == 'android' ? 'bold' : '600' }} >
                            ranausama12334@gmail.com
                        </Text>
                    </View>
                </View>
            </ScrollView>

        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    },
    navContainer: {
        marginTop: RFPercentage(2),
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})


export default MyAccountScreen;