import React from 'react';
import HomeNav from '../screens/home';
import Browse from '../screens/browse';
import OrderHistory from '../screens/orderhistory';
import Profile from '../screens/profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyStore from '../screens/store/MyStore';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../ui';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {t} = useTranslation()
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
        name="Home"
        component={HomeNav}
        options={{
          tabBarLabel: t('bottomTab.home'),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home-filled" size={33} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarLabel: t('bottomTab.browse'),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyStore"
        component={MyStore}
        options={{
          tabBarLabel: t('bottomTab.store'),
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
          tabBarLabel: t('bottomTab.orderHistory'),
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
          tabBarLabel: t('bottomTab.profile'),
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 10,
            fontFamily: theme.fontFamilies.heading,
            marginBottom: 10,
          },
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

