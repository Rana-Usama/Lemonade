import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import MyAccountScreen from './app/screens/MyAccountScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="MyAccountScreen">
        <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
