import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Homescreen from './Homescreen';
import { Appbar  } from 'react-native-paper';
function Ben({navigation}){
  function Homespage(){
    navigation.navigate('Home');

}
function Trcreen(){
  navigation.navigate('Tr');

}

return(


 <View style={styles.container}>
    
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
    <Appbar.Action icon="plus"  style={{borderWidth: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderColor:"#FADCD9",}}/>
    <Appbar.Action icon="wallet" onPress={Homespage} /> 
    
  </Appbar.Header>
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
export default Ben