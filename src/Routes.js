import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../src/pages/home';
import Login from '../src/pages/login';
import Splash from '../src/inicialization/SplashScreen';
import Presentation from '../src/pages/presentation';
const Stack = createStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Presentation" component={Presentation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
