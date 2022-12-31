import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { db,authentication} from '../components/config';
import { collection, doc, setDoc,addDoc,getDoc,docData,getDocs } from "firebase/firestore"; 
import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
function Loginscreen({navigation}){
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  const[email,setEmail]=useState('');
  
    function signIn() {
      signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //your code
          navigation.navigate('Home');
          alert("Sucessfully signed in!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }

  
     
    



return(
<View style={styles.container}>

<StatusBar style="auto" />
<Image style={styles.image} source={require('../assets/M.B.A.U.V.C.png')}/>
<TextInput value={email} onChangeText={(email) => {setEmail(email)}} style={styles.TextInput} placeholder='Email' placeholderTextColor="#442C2E"  />
<TextInput value={password}  onChangeText={(password) => {setpassword(password)}} style={styles.TextInput} placeholder='Password' placeholderTextColor="#442C2E" secureTextEntry={true} />


<TouchableOpacity style={styles.buttonStyle} onPress={signIn}><Text >  Login in </Text></TouchableOpacity>
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