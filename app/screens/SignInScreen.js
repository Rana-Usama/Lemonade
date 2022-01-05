import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';
import LoadingModal from './../components/common/LoadingMdal';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SignInScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
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

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!tempfeilds[0].value.match(mail)) {
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

            {/* Mail */}
            <Text style={{ marginTop: RFPercentage(5), color: Colors.greyNew, fontSize: RFPercentage(2.5), fontWeight: '500' }} >
                Enter your email to signin
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

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                <MyAppButton
                    title="Sign In"
                    padding={RFPercentage(1.6)}
                    onPress={() => handleLogin()}
                    backgroundColor={Colors.pink}
                    color={Colors.white}
                    bold={false}
                    borderRadius={RFPercentage(1)}
                    width={"60%"}
                />
            </View>


        </Screen>
    );
}

export default SignInScreen;