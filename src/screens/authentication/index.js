import React from 'react';
import Login from './Login';
import Signup from './Signup';
import {createStackNavigator} from '@react-navigation/stack';
const AuthNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNav;
