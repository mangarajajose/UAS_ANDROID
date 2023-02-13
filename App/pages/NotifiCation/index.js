import * as React from 'react';
import { 
  StyleSheet, 
  View, 
  Text,
  Image,
  Dimensions
 } from 'react-native';
 import{
  ICEmpty,
  kiRi
}from '../../assets/images';

export default NotifiCation =({navigation})=> {

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen')
    }, 3000)
  }, [navigation]);

    return (
      <View style={style.container}>
     
     <Text  style={{fontWeight:'bold'}}>
       <Image source={kiRi} style={style.logoImage}/> NotifiCation
       </Text>
       <View style={style.logoContainer}>
        <Image source={ICEmpty} style={style.logoMain}/>
        <Text style={style.TextBig}>Saat Ini Belum ada Notifikasi</Text>

        <Text>Tetap Terapkan Perilaku Hidup bersih dan sehat, jaga jarak dan #dirumah aja</Text>
        </View>
      </View>
      
    );
}

const Height = Dimensions.get("screen").height;
const Weidth = Dimensions.get("screen").width;

const style = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  logoContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMain:{
    width:400,
    height:200,
    resizeMode:'center'
  },  
  logoImage:{
    width:10, 
    height:10, 
    resizeMode:'contain',
    marginLeft:10
  },
  footherText:{
    fontWeight:'bold',
    marginBottom:-30
  },
  TextBig:{
    fontSize:20,
  }
})