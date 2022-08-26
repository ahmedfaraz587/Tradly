import React from 'react'
import AddProduct from './AddProduct'
import CreateSore from './CreateStore'
import EditProduct from './EditProduct'
import MyStore from './MyStore'

import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

const Store = () => {
     return (
     <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='MyStore'>
          <Stack.Screen name='AddProduct' component={AddProduct} />
          <Stack.Screen name='MyStore' component={MyStore} />
          <Stack.Screen name='EditProduct' component={EditProduct} />
          <Stack.Screen name='CreateSore' component={CreateSore} /> 
     </Stack.Navigator>          
     );
}

export default Store;