import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image} from 'react-native';
import { db,authentication} from '../components/config';
import { collection, doc, setDoc,addDoc,getDoc,docData,getDocs } from "firebase/firestore"; 
import React, { useState } from 'react';
function Loginscreen({navigation}){
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');

  function Homespage(){
    getDoc(doc(db, "users", '5pfPewORCotrSwTDpHN3')).then(docData => { 
      // Data saved successfully!
      
      if (docData.exists()) {

        // console.log(docData.data());
       
        setusername(docData.data().username);
        setpassword(docData.data().password);   
        navigation.navigate('Home');
      } else {
         console.log('No such a data!');
      }

    }).catch((error) => {
          // The write failed...
          console.log(error);
    })
     
    
}


return(
<View style={styles.container}>

<StatusBar style="auto" />
<Image style={styles.image} source={require('../assets/M.B.A.U.V.C.png')}/>
<TextInput value={username} onChangeText={(username) => {setusername(username)}} style={styles.TextInput} placeholder='Username' placeholderTextColor="#442C2E"  />
<TextInput value={password}  onChangeText={(password) => {setpassword(password)}} style={styles.TextInput} placeholder='Password' placeholderTextColor="#442C2E" secureTextEntry={true} />


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