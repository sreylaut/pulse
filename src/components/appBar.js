import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  ImageBackground

} from 'react-native';
import {theme} from '../config/themes/colors';
import { Appbar ,Avatar} from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';


const styles = StyleSheet.create({
   // Icon
   profile:{
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor: theme.colors.white,
    backgroundColor:"10px 10px 17px 12px rgba(255,255,255,0.5)",
    shadowOffset:{width:40,height:40},
    elevation:20,
    // shadowColor:theme.colors.secondary,
    height: 50, //any of height,
    width:50, 
  },
  my_health_icon_container:{
    margin:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor: theme.colors.white,
    shadowOffset:{width:40,height:40},
    elevation:20,
    // shadowColor:theme.colors.secondary,
    height: 30, //any of height,
    width:30, 
  }
})
function Icon ({color, name,size,desText}){
  return (

<TouchableOpacity style={styles.my_health_icon_container}>
    {/* <View style={styles.iconStyle}> */}
<Ionicons name={name} size={size} color={color}/>
    {/* </View> */}
    </TouchableOpacity>  
  //    <Text style={{textAlign:'center', fontWeight:"bold", color:theme.colors.darkGrey, fontSize:12}}>My</Text>
  // <Text style={{textAlign:'center', fontWeight:"normal", color:theme.colors.darkGrey, fontSize:10}}>{desText}</Text> */}
  //    </View>
    
    
  )
}
function AppBar  () {
  
  return (
    <Appbar.Header
    style={{backgroundColor:'#ca1827'}}
    >
     
     <View style={{marginBottom:10,marginLeft:20}}>
     <TouchableOpacity style={styles.profile}><Appbar.Action icon="account" color={theme.colors.white} size={30}/></TouchableOpacity>
     </View>

     
      <Appbar.Content title="Pulse" subtitle="By Prudential" titleStyle={{fontWeight:'bold',justifyContent:'center'}} />
<View style={{justifyContent:'space-around',flexDirection:'row',}}>
<TouchableOpacity style={styles.my_health_icon_container}><Appbar.Action icon="share-variant" color={theme.colors.primaryColor} size={15}/></TouchableOpacity>
<TouchableOpacity style={styles.my_health_icon_container}><Appbar.Action icon="gift" color={theme.colors.primaryColor} size={15}/></TouchableOpacity>
<TouchableOpacity style={styles.my_health_icon_container}><Appbar.Action icon="bell" color={theme.colors.primaryColor} size={15}/></TouchableOpacity>

</View>
    </Appbar.Header>
  );
};

export default AppBar;