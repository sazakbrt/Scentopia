import { View, Text } from 'react-native'
import React from 'react'
import navigationCont from './src/navigation/navigationCont'
import HomeScreen, {renderCategoryItem} from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from './src/screens/AuthScreen';
import CategoryDetailScreen from './src/screens/CategoryDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { LikedPerfumesProvider } from './src/contexts/LikedPerfumesContext';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <LikedPerfumesProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen 
                name='Auth' 
                component={AuthScreen}
                options={{title:'Kimlik Doğrulama'}}
            />
            <Stack.Screen 
                name='AnaSayfa' 
                component={HomeScreen}
                options={{title:'Ana Sayfa'}}
            />
            <Stack.Screen
              name="CategoryDetail"
              component={CategoryDetailScreen}
              options={{title:'Kategori Detayları'}}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{title:'Profil'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </LikedPerfumesProvider>
  )
}

export default App