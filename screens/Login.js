import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';


function Loginscreen({navigation}){
  function Homespage(){
    navigation.navigate('Home');

}
return(
<View style={styles.container}>

<StatusBar style="auto" />
<Image style={styles.image} source={require('../assets/M.B.A.U.V.C.png')}/>
<TextInput style={styles.TextInput} placeholder='Username' placeholderTextColor="#442C2E" />
<TextInput style={styles.TextInput} placeholder='Password' placeholderTextColor="#442C2E" secureTextEntry={true} />
<TouchableOpacity style={styles.buttonStyle} onPress={Homespage}><Text >  Login in </Text></TouchableOpacity>
<TouchableOpacity>
  <Text style={styles.forgot_button} >Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.buttonStyle}><Text>  Login via voice </Text></TouchableOpacity>

</View>



);


}
const styles = StyleSheet.create({
    container: {
        
      flex: 1,
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
        fontSize: 25,
        
    },
    TextInput: {
    
        margin:16,
        borderWidth:1,
        borderColor:"#F8AFA6",
       width:'80%',
       paddingHorizontal:10,
       paddingVertical:10,
       color:'#442C2E',
       fontSize: 20,
       marginBottom: 10,
       
       
       
        
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },





  });
export default Loginscreen