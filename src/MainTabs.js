
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabar';

import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ActivityScreen';
import SettingsScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />} // ✅ pass ALL props here
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Missed" component={ChatScreen} />
      <Tab.Screen name="Control" component={SettingsScreen} />
      <Tab.Screen name="Accounts" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
