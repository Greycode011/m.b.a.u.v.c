import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TouchableOpacity,Platform,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreditCard from 'react-native-credit-card-form-ui';
import * as React from 'react';
import Swiper from 'react-native-swiper';
import Benscreen from "./Ben";
import Trscrenn from "./Tr";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Appbar  } from 'react-native-paper';

import react from 'react';




function Homescreen({navigation}){
  function Benscreen(){
    navigation.navigate('Ben');

}
function Trcreen(){
  navigation.navigate('Tr');

}
  const icon = <FontAwesome5 name={'comments'} />;
  
  const creditCardRef = React.useRef() ;

  const handleSubmit = React.useCallback(() => {
    if (creditCardRef.current) {
      const { error, data } = creditCardRef.current.submit();
      console.log('ERROR: ', error);
      console.log('CARD DATA: ', data);
    }
  }, []);
    return(
      
    <View style={styles.container}>
<StatusBar style="auto" />

<KeyboardAvoidingView style={styles.container}>
 
        
   
<Text style={styles.Text}>Bank Cards <Icon name="credit-card" size={20} color="#900" /></Text>





      
    <Swiper style={styles.wrapper} showsButtons={false} automaticallyAdjustContentInsets={true}   paginationStyle={{
position: 'absolute',
top: 0,
right: 0,
bottom: -90,

}}  >
      
        <View style={styles.slide1}>
    <CreditCard  placeholderTextColor='white' placeholders={ { number: '4741 6861 9753 3070', holder: 'johnny silverhand', expiration: '12/2024', cvv: '103' }  } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#ffb5a7" 
    readOnly={{ number: true, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef}  editable = {false}/>
   

        </View>
        <View style={styles.slide2}>
        <CreditCard  placeholderTextColor='white' placeholders={ { number: '4485 0997 7535 8821', holder: 'johnny silverhand', expiration: '03/2028', cvv: '748' } } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#fec89a" 
    readOnly={{ number: false, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef} editable = {false}/>
        </View>
        <View style={styles.slide3}>
        <CreditCard  placeholderTextColor='white' placeholders={ { number: '4546 8337 4420 8270', holder: 'johnny silverhand', expiration: '08/2028', cvv: '894' } } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#f08080" 
    readOnly={{ number: false, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef} editable = {false}/>
        </View>
        
      </Swiper>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 10, backgroundColor: '#F8AFA6',bottom:120}} />
  </View>
   
  <Text style={{bottom:120,fontSize:20,right:20}}>Transaction{'\n'}{'\n'}Date	        Description 	          Amount {'\n'}{'\n'}
  1/1/2018	  payment	                 -100.00
  {'\n'}
  {'\n'}
  1/1/2018	  deposite                 +1000
  {'\n'}
  {'\n'}
  1/1/2018	  payment                 -500
  </Text>
  <Appbar.Header style={{width:360,flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center', backgroundColor: '#F9F1F0',bottom:70,borderWidth: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor:"#FADCD9",
            
            }} >
    
    
    <Appbar.Action icon="microphone" onPress={() => {}} />
    <Appbar.Action icon="send" onPress={Trcreen} />
    <Appbar.Action icon="briefcase" onPress={() => {}} />
    <Appbar.Action icon="plus" onPress={Benscreen} />
    <Appbar.Action icon="wallet" onPress={() => {}} style={{borderWidth: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor:"#FADCD9",}}/> 
    
  </Appbar.Header>
  </KeyboardAvoidingView>
    </View>

    
    );
    
    
    }

  

    const styles = StyleSheet.create({
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 160
      },
      wrapper: {},
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 160
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 160
      },
      
        container: {
            
          flex: 1,

          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9F1F0',
   
        },
       
        Text: {
    
            
            color:'#442C2E',
         
            fontSize: 20,
          },
        containe: {
            
            flex: 1,

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
    export default Homescreen