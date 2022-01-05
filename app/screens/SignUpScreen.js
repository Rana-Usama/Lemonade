import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingMdal';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SignUpScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [tick, setTick] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "First Name",
            value: "",
        },
        {
            placeholder: "Last Name",
            value: "",
        },
        {
            placeholder: "Email",
            value: "",
        },
        {
            placeholder: "Password",
            secure: true,
            value: ""
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!tempfeilds[2].value.match(mail)) {
            alert("Wrong Email Entered!");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.white }}>

            <LoadingModal show={indicator} />

            {/* Nav */}
            <View style={{ width: '90%', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', left: 0 }} >
                    <Ionicons name="chevron-back" style={{ fontSize: RFPercentage(3) }} color="black" />
                </TouchableOpacity>
                {/* Logo */}
                <Image style={{ width: RFPercentage(11), height: RFPercentage(11) }} source={require('../../assets/images/logo.png')} />
            </View>

            {/* Tag Line */}
            <Text style={{ marginTop: RFPercentage(5), color: Colors.greyNew, fontSize: RFPercentage(2.5), fontWeight: '500' }} >
                Enter your details to sign up
            </Text>

            {/* Input fields */}
            <View style={{ marginTop: RFPercentage(7), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                {inputField.map((item, i) => (
                    <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(2) }} >
                        <InputField
                            placeholder={item.placeholder}
                            backgroundColor={Colors.white}
                            // onTouchStart={() => setButtonColor(true)}
                            borderWidth={RFPercentage(0.1)}
                            borderColor={'#b7b7b7'}
                            height={RFPercentage(6.5)}
                            placeholderAtCenter={false}
                            secure={item.secure}
                            borderRadius={RFPercentage(1.3)}
                            fontSize={RFPercentage(2)}
                            handleFeild={(text) => handleChange(text, i)}
                            value={item.value}
                            width={"90%"}
                        />
                    </View>
                ))}
            </View>

            <View style={styles.forgetRememberContainer}>
                {/* Check Box */}
                <TouchableOpacity onPress={() => setTick(true)} activeOpacity={0.5} style={[styles.checkBox, { borderColor: tick ? Colors.pink : Colors.grey, }]}>
                    {tick ?
                        <TouchableOpacity activeOpacity={0.8} onPress={() => setTick(false)} >
                            <Octicons name="check" style={{ fontSize: RFPercentage(2) }} color={Colors.pink} />
                        </TouchableOpacity>
                        : null}
                </TouchableOpacity>
                <Text style={styles.rememberMe}>
                    I agree to the
                </Text>
                <Text style={{ color: Colors.pink, fontSize: RFPercentage(1.9), marginLeft: RFPercentage(0.3), fontWeight: '500' }} >
                    Terms of Service
                </Text>
            </View>

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(8) }}>
                <MyAppButton
                    title="Sign Up"
                    padding={RFPercentage(1.6)}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.pink}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"60%"}
                />
            </View>

            <View style={{ position: 'absolute', bottom: RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(1.9), color: Colors.greyNew, fontWeight: '500' }} >
                    Already a member?
                </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('SignInScreen')} >
                    <Text style={{ fontSize: RFPercentage(2), marginLeft: RFPercentage(0.3), color: Colors.pink, fontWeight: Platform.OS == 'android' ? 'bold' : '700' }} >
                        Sign in
                    </Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    forgetRememberContainer: {
        marginTop: RFPercentage(2.4),
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: RFPercentage(2.5),
        height: RFPercentage(2.5),
        borderRadius: RFPercentage(0.5),

        borderWidth: RFPercentage(0.09),
        backgroundColor: Colors.white

    },
    rememberMe: {
        marginLeft: RFPercentage(1),
        fontSize: RFPercentage(1.8),
        color: Colors.inputFieldBorder
    },
})

export default SignUpScreen;