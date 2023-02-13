import * as React from 'react';
import {
  PrimaryButton
} from '../../components'
import { 
  kaNan, 
  kiRi
 } from '../../assets/images'
 import {
  DateButton
} from '../../components'
import { 
  View,
  Image, 
  Text,
  TextInput,
  StyleSheet
 } from 'react-native';
 import{
  PeduliLingkungan
} from '../../assets/images'
export default AccoUnt =({navigation})=> {


  const onSubmitData=()=>{
  navigation.replace('LoginScreen')
  

  }


    return (
      <View style={style.mainContainer}>
  
       
       <Text  style={{fontWeight:'bold'}}>
       <Image source={kiRi} style={style.logoImage}/>  Account
       </Text>

        <View style={style.container}>
    
        <View style={{flex:0, flexDirection:'row'}}>
        <Image source={PeduliLingkungan}/>
                    <Text  style={{fontWeight:'bold'}}>
                             Mangaraja jose
                             
                    </Text>
        </View>

        <View style={{flex:3, flexDirection:'row'}}>
        <Text style={style.haderText}>mangarajajose@gmail.com</Text>
        </View>
        <View style={{flex:1}}>
        <Text>
            Vaccination
        </Text>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
        <Text style={style.haderText}>
            Vaccine history and ticket                       <Image source={kaNan}/>
        </Text>
        </View>

        <View style={{flex:4, flexDirection:'row'}}>
        <Text style={style.haderText}>
            Vaccine Certivicate                                   <Image source={kaNan}/>
        </Text>
        </View>
        <View style={{flex:0}}>

          </View>
          <View style={{flex:0}}>

          </View>
        <View style={{flex:1}}>
        <Text>
            Other Information 
        </Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
        <Text style={style.haderText}>
        Group member Profile                          <Image source={kaNan}/>
        </Text>
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
        <Text style={style.haderText}>
        About Peduli Lingkungan                    <Image source={kaNan}/>
        </Text>
        </View>


        <View style={{flex:1, flexDirection:'row'}}>
        <Text style={style.haderText}> 
            FAQ                                                         <Image source={kaNan}/>
        </Text>
        </View>


        <View style={{flex:5, flexDirection:'row'}}>
        <Text style={style.haderText}>
            RATE US(V1.0.0)                                  <Image source={kaNan}/>
        </Text>
        </View>

          <PrimaryButton
            title="LOG OUT"
            onPress={onSubmitData}/>
    
        </View>
        
       </View>
       
    );
}

const style = StyleSheet.create({
  container:{
    flex: 1, 
    padding:25,
    justifyContent: 'center',
    backgroundColor:'white'
  },  
  logoTopStyle:{
    width:150,
    height:150
  },
  logoContainer:{
    alignItems:'center'
  },  
  inputSytle:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:'#006175',
      borderRadius:5,
      padding: 10,
  },
  footherText:{
    fontWeight:'bold',
    marginBottom:-30
  },
  footherLogo :{
    alignItems:'center',
    flexDirection:'row'
  },
  logoImage:{
    width:10, 
    height:10, 
    resizeMode:'contain',
    marginLeft:10
  },
  mainContainer:{
    flex:2, 
    backgroundColor:'white',
    padding:15
  },
  haderText:{
    fontWeight:'bold',
    marginLeft:5,
    flex: 2, 
    textDecorationLine:'underline'
    
  }
})