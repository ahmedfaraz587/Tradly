import React from 'react'
import Catalogue from './Catalogue';
import HomeDashboard from './HomeDashboard';
import ProductDetail from './ProductDetail'
import { createStackNavigator } from '@react-navigation/stack';

const HomeNav = () => {
     const Stack = createStackNavigator()
     return (
       <Stack.Navigator
         screenOptions={{headerShown: false}}
         initialRouteName="HomeDashboard">
         <Stack.Screen name="HomeDashboard" component={HomeDashboard} />
         <Stack.Screen name="Catalogue" component={Catalogue} />
         <Stack.Screen name="ProductDetail" component={ProductDetail} />
       </Stack.Navigator>
     );
}

export default HomeNav;