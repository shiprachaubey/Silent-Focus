import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from '../screens/LogoScreen';
import WelcomeScreen1 from '../screens/Welcome1Screen';
import WelcomeScreen2 from '../screens/Welcome2Screen';
import WelcomeScreen3 from '../screens/Welcome3Screen';
import PermissionScreen from '../screens/PermissionScreen';
import LoginScreen from '../screens/LoginScreen';
import MainTabs from '../MainTabs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
    
  <Stack.Screen name="Logo" component={LogoScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Welcome1" component={WelcomeScreen1} options={{ headerShown: false }} />
  <Stack.Screen name="Welcome2" component={WelcomeScreen2} options={{ headerShown: false }} />
 <Stack.Screen name="Welcome3" component={WelcomeScreen3} options={{ headerShown: false }} />
 <Stack.Screen name="Permission" component={PermissionScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
   <Stack.Screen name="MainTabs" component={MainTabs} />
</Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
