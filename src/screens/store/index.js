import React from 'react';
import AddProduct from './AddProduct';
import CreateSore from './CreateStore';
import EditProduct from './EditProduct';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Store = ({route}) => {
     const screen = route.params.screen
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screen}>
      <Stack.Screen name="CreateStore" component={CreateSore} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="EditProduct" component={EditProduct} />
    </Stack.Navigator>
  );
};

export default Store;
