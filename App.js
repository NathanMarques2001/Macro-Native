import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomePage } from './src/views/screens/first-acess/welcome';
import { PersonalDataPage } from './src/views/screens/first-acess/personal-data';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="PersonalData" component={PersonalDataPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}