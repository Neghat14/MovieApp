import React from 'react';
import {View,StyleSheet, ActivityIndicator} from 'react-native';


const Loader=(props)=>{
 return(
   <View style={style.container}>
      <ActivityIndicator size="large" color="#d11521"/>
   </View>
 );
}

const style=StyleSheet.create({
    container : {
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        backgroundColor:'black'
    }
})

export default Loader;

