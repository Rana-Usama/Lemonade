import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

//config

function BottomTab({ props }) {

    const bottomTabData = [
        {
            imageSource: require('../../../assets/images/b1.png'),
        },
        {
            imageSource: require('../../../assets/images/b2.png'),
        },
        {
            onpress: () => props.navigation.navigate('CheckPriceScreen'),
            imageSource: require('../../../assets/images/b3.png'),
        },
        {
            onpress: () => props.navigation.navigate('ApplyNowScreen'),
            imageSource: require('../../../assets/images/b4.png'),
        },
        {
            imageSource: require('../../../assets/images/b5.png'),
        },
    ]

    return (

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', position: 'absolute', bottom: RFPercentage(2), backgroundColor: Colors.white, width: RFPercentage(40), height: RFPercentage(8.8), borderRadius: RFPercentage(20) }} >
            <ScrollView horizontal={true} style={styles.feedHorizentalScroll}>
                <View style={styles.feedScrollSubContainer}>
                    {bottomTabData.map((item, i) => (
                        <TouchableOpacity key={i} activeOpacity={0.8} onPress={item.onpress} >
                            <Image style={{ marginLeft: !i == 0 ? RFPercentage(2) : 0, width: RFPercentage(7), height: RFPercentage(7) }} source={item.imageSource} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    feedHorizentalScroll: {
        width: '100%',
        borderRadius: RFPercentage(10),
        backgroundColor: Colors.white
    },
    feedScrollSubContainer: {
        width: "70%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})

export default BottomTab;