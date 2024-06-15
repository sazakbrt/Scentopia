import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import Auth from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const navigationCont = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen 
                name='Auth' 
                component={Auth}
                options={{title:'Kimlik Doğrulama'}}
            />
            <Stack.Screen 
                name='AnaSayfa' 
                component={HomeScreen}
                options={{title:'Ana Sayfa'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default navigationCont