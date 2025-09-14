import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import SkillScreen from './SkillScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Main Screen' }}
        />
        <Stack.Screen
          name="Skill"
          component={SkillScreen}
          options={{ title: 'Skill Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
