// MainTabs.js
import React from 'react';
import { View, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ActivityScreen';
import SettingsScreen from './src/screens/SettingScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Your custom SVGs
import HomeIcon from './src/assets/svgs/HomeIcon';
import ChatIcon from './src/assets/svgs/ActivityIcon';
import SettingsIcon from './src/assets/svgs/SettingIcon';
import ProfileIcon from './src/assets/svgs/ProfileIcon';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ focused, IconComponent }) => {
  return (
    <View style={{
      borderRadius: 42,
      backgroundColor: focused ? 'rgba(0, 0, 0, 0.65)' : 'transparent',
      padding: 12,
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
    }}>
      {IconComponent}
    </View>
  );
};

const MainTabs = () => {
  const scheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 42,
          height: 70,
          marginHorizontal: 16,
          marginBottom: 16,
          backgroundColor: scheme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(85,85,85,0.12)',
          shadowColor: '#000',
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        animationEnabled: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} IconComponent={<HomeIcon />} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} IconComponent={<ChatIcon />} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} IconComponent={<SettingsIcon />} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} IconComponent={<ProfileIcon />} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
