import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OTPVerification from './OTPVerification'
import SendOTP from './SendOTP'

const OTPNav = () => {
     const Stack = createStackNavigator();
     return (
       <Stack.Navigator
         initialRouteName="SemdOTP"
         screenOptions={{
           headerShown: false,
         }}>
         <Stack.Screen name="SendOTP" component={SendOTP} />
         <Stack.Screen name="OTPVerification" component={OTPVerification} />
       </Stack.Navigator>
     );
}

export default OTPNav;