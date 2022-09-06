import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash';
import OnBoarding from '../screens/onboarding';
import Auth from '../screens/authentication';
import OTPNav from '../screens/otp';
import BottomNavigation from './BottomNavigation';
import ProductDetail from '../screens/productDetails';
import Wishlist from '../screens/wishlist';
import CheckoutNavigation from '../screens/checkout';
import Store from '../screens/store';
import StoreProfile from '../screens/storeprofile'

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="OTPNav" component={OTPNav} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="CheckoutNavigation" component={CheckoutNavigation} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="StoreProfile" component={StoreProfile} />
    </Stack.Navigator>
  );
};

export default MainStack;
