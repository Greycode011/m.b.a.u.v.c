import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,KeyboardAvoidingView,TouchableOpacity,Platform,ScrollView} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreditCard from 'react-native-credit-card-form-ui';
import * as React from 'react';
import Swiper from 'react-native-swiper';






function Homescreen(){
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
   
<Text style={styles.Text}>Bank Cards <Icon name="credit-card" size={20} color="#900" /></Text>





      
    <Swiper style={styles.wrapper} showsButtons={false} automaticallyAdjustContentInsets={true}  keyboardDismissMode={true} paginationStyle={{
position: 'absolute',
top: 0,
right: 0,
bottom: -26,

}}  >
      
        <View style={styles.slide1}>
    <CreditCard  placeholderTextColor='white' placeholders={ { number: '4741 6861 9753 3070', holder: 'johnny silverhand', expiration: '12/2024', cvv: '103' }  } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#ffb5a7" 
    readOnly={{ number: false, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef} />
    

        </View>
        <View style={styles.slide2}>
        <CreditCard  placeholderTextColor='white' placeholders={ { number: '4485 0997 7535 8821', holder: 'johnny silverhand', expiration: '03/2028', cvv: '748' } } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#fec89a" 
    readOnly={{ number: false, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef}/>
        </View>
        <View style={styles.slide3}>
        <CreditCard  placeholderTextColor='white' placeholders={ { number: '4546 8337 4420 8270', holder: 'johnny silverhand', expiration: '08/2028', cvv: '894' } } 
    labels={{ holder: 'Name', expiration: 'Card Expiry', cvv: 'cvv' }} background="#f08080" 
    readOnly={{ number: false, holder: false, expiration: false, cvv: false }} 
    ref={creditCardRef}/>
        </View>
        
      </Swiper>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#F8AFA6',bottom: 240,}} />
  <Icon.Button
    name="facebook"
    backgroundColor="#3b5998"
   
  >
  
  </Icon.Button>
 
</View>
   
    
    </View>

    
    );
    
    
    }

  

    const styles = StyleSheet.create({
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 250
      },
      wrapper: {},
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 250
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F1F0',
        marginBottom: 250
      },
      
        container: {
            
          flex: 1,

          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F9F1F0',
          marginBottom: 150
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