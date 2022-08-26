import React from 'react';
import HomeNav from '../screens/home';
import Browse from '../screens/browse';
import Store from '../screens/store';
import OrderHistory from '../screens/orderhistory';
import Profile from '../screens/profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../ui';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          padding: 5,
        },
      }}
      tabBarOptions={{
        inactiveTintColor: theme.colors.darkGrey50,
        activeTintColor: theme.colors.primary,
      }}>
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNav}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home-filled" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarLabel: 'Browse',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="store" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          tabBarLabel: 'Order History',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="history" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
