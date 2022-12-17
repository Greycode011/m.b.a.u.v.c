import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Loginscreen from './screens/Login';
import Registercreen from './screens/Register'
import Main from "./screens/Main";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './screens/Homescreen'
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
