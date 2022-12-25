import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Loginscreen from './screens/Login';
import Registercreen from './screens/Register'
import Main from "./screens/Main";
import Ben from "./screens/Ben";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen'
import Tr from "./screens/Tr";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
    
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#F9F1F0',
        },
        headerTintColor: '#442C2E',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="Login" component={Loginscreen} />
    <Stack.Screen name="Register" component={Registercreen} />
    <Stack.Screen name="Home" component={Homescreen} />
    <Stack.Screen name="Ben" component={Ben} />
    <Stack.Screen name="Tr" component={Tr} />
        </Stack.Navigator>
       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
