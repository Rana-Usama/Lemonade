import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MyAccountScreen from './app/screens/MyAccountScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import ApplyNowScreen from './app/screens/ApplyNowScreen';
import CheckPriceScreen from './app/screens/CheckPriceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SignUpScreen">
        <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ApplyNowScreen" component={ApplyNowScreen} />
        <Stack.Screen name="CheckPriceScreen" component={CheckPriceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
