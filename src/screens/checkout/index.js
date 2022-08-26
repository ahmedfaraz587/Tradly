import React from 'react'
import AddCard from './AddCard'
import AddAddress from './AddAddress';
import CheckoutSuccess from './CheckoutSuccess'
import Mycart from './Mycart';
import Payment from './Payment'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CheckoutNavigation = () => {
     return (
          <Stack.Navigator 
          screenOptions={{
               headerShown: false,
          }}
          initialRouteName='Mycart'
          >
               <Stack.Screen name="Mycart" component={Mycart} />
               <Stack.Screen name="AddCard" component={AddCard} />
               <Stack.Screen name="AddAddress" component={AddAddress} />
               <Stack.Screen name="Payment" component={Payment} />
               <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccess} />
          </Stack.Navigator>

          
     );
}

export default CheckoutNavigation;