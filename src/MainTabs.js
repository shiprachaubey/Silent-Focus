// // MainTabs.js
// import React from 'react';
// import { View, useColorScheme } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useTheme } from '@react-navigation/native';
// import CustomTabBar from './components/CustomTabar';

// import HomeScreen from './screens/HomeScreen';
// import ChatScreen from './screens/ActivityScreen';
// import SettingsScreen from './screens/SettingScreen';
// import ProfileScreen from './screens/ProfileScreen';



// const Tab = createBottomTabNavigator();


// const TabBarIcon = ({ focused, IconComponent }) => {
//     const { colors } = useTheme(); 
//   return (
//     <View style={{
//       borderRadius: 42,
//       backgroundColor: focused ? 'rgba(0, 0, 0, 0.65)' : 'transparent',
//       padding: 12,
//       shadowColor: '#000',
//       shadowOpacity: 0.4,
//       shadowRadius: 10,
//       shadowOffset: { width: 0, height: 4 },
//     }}>
//       {IconComponent}
//     </View>
//   );
// };

// const MainTabs = () => {
//   const scheme = useColorScheme();

//   return (
//   <Tab.Navigator
//   tabBar={(props) => <CustomTabBar {...props} />}
//   screenOptions={{ headerShown: false }}
// >
//   <Tab.Screen name="Home" component={HomeScreen} />
//   <Tab.Screen name="Missed" component={ChatScreen} />
//   <Tab.Screen name="Control" component={SettingsScreen} />
//   <Tab.Screen name="Accounts" component={ProfileScreen} />
// </Tab.Navigator>
//   );
// };

// export default MainTabs;
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
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Missed" component={ChatScreen} />
      <Tab.Screen name="Control" component={SettingsScreen} />
      <Tab.Screen name="Accounts" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
