import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash';
import OnBoarding from '../screens/onboarding';
import Auth from '../screens/authentication';
import OTPNav from '../screens/otp';
import HomeNav from '../screens/home';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="HomeNavigation"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="OTPNav" component={OTPNav} />
      <Stack.Screen name="HomeNavigation" component={HomeNav} />
    </Stack.Navigator>
  );
};

export default MainStack;
