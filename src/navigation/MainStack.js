import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
      initialRouteName="BottomNavigation"
      screenOptions={{
        headerShown: false,
      }}>
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
