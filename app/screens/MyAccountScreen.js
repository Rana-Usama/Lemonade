import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

function MyAccountScreen(props) {
    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>
            <Text>My account</Text>

        </Screen>
    );
}

export default MyAccountScreen;