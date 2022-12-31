import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,Image,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { collection, doc, setDoc,addDoc,getDoc } from "firebase/firestore"; 
import { db } from '../components/config.jsx';

function Registercreen(){
  const [Date, setSelectedDate] = useState('');
  const[email,setEmail]=useState('');
  const[username,setusername]=useState('');
  const[phone,setphone]=useState('');
  const[password,setpassword]=useState('');
  const[fullname,setfullname]=useState('');
  function create(){
    //submit data
    addDoc(collection(db, "users"), {
      username:username,
      fullname:fullname,
      Email: email,
      phone:phone,
      password:password,
      Date:Date,

    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  

    }).catch((error) => {
          // The write failed...
          console.log(error);
    });

  }

return(
  <ScrollView>
<View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('../assets/M.B.A.U.V.C.png')}/>
      <TextInput style={styles.TextInput} placeholder='Email' placeholderTextColor="#442C2E" value={email} onChangeText={(email) => {setEmail(email)}}/>
      <TextInput style={styles.TextInput} placeholder='Phone Number' placeholderTextColor="#442C2E" value={phone} onChangeText={(phone) => {setphone(phone)}} />
      <TextInput style={styles.TextInput} placeholder='full name' placeholderTextColor="#442C2E" value={fullname} onChangeText={(fullname) => {setfullname(fullname)}} />
      <TextInput style={styles.TextInput} placeholder='Username' placeholderTextColor="#442C2E"   value={username} onChangeText={(username) => {setusername(username)}}/>
      <TextInput style={styles.TextInput} placeholder='Password' placeholderTextColor="#442C2E" value={password} onChangeText={(password) => {setpassword(password)}}/>
      <DatePicker value={Date}  onChangeText={(Date) => {setSelectedDate(Date)}} options={{
        backgroundColor: '#F9F1F0',
        textHeaderColor: '#442C2E',
        textDefaultColor: '#442C2E',
        selectedTextColor: '#442C2E',
        mainColor: '#F4722B',
        textSecondaryColor: '#F8AFA6',
        borderColor: '#F8AFA6',
        
      }}
      mode="calendar"
      onSelectedChange={date => setSelectedDate(date)}/>
      <TouchableOpacity style={styles.buttonStyle}   onPress={create}><Text>  Register</Text></TouchableOpacity>
     
 
</View>
</ScrollView>


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
        fontSize: 25,
        
    },
    TextInput: {
    
 
        borderWidth:1,
        borderColor:"#F8AFA6",
       width:'80%',
       paddingHorizontal:10,
       paddingVertical:10,
       color:'#442C2E',
       fontSize: 20,
       marginBottom: 10,
       
       
       
        
      },
      




  });
export default Registercreen