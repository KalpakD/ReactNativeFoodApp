import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../containers/intro/Splash';
import Login from '../containers/auth/Login';

const Stack = createStackNavigator();
function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor="#fffffF"
        barStyle="dark-content"
      />
      <AppStack />
    </NavigationContainer>
  );
}

export default Navigation;
