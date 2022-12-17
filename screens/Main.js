import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Loginscreen from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Main({navigation}){
    function loginpage(){
        navigation.navigate('Login');

    }
    function Rgisterpage(){
        navigation.navigate('Register');

    }

return(


 <View style={styles.container}>
    <Image source={require('../assets/M.B.A.U.V.C.png')}
      />
      <StatusBar style="dark" />
      <TouchableOpacity style={styles.buttonStyle} onPress={loginpage}><Text >  Login in </Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={Rgisterpage}><Text >  Register </Text></TouchableOpacity>
      
    
</View>



);


}
const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F9F1F0',
      marginBottom: 250
    },
    buttonStyle: {
        backgroundColor: '#FADCD9',
        borderColor:"#F8AFA6",
        width: '80%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        fontSize: 20,
        marginBottom: 10
    },





  });
export default Main