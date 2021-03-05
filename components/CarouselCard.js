import React from 'react';
import {
     View,
     Text,
     StyleSheet,
     Image,
     ImageBackground, 
     TouchableOpacity,
     Dimensions
    }from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const CarouselCard=({data})=>{
    
    return (
        <ImageBackground style={[styles.imageBackground]} source= {{uri : data.foregroundImage}}>
            
            <View style={{flex : 1 ,height:'100%',flexDirection:'row' ,alignItems:'center' , elevation:5}}  backgroundColor='rgba(0,0,0,0.7)'>
                <View style={{height:'100%',width:'45%'}}>
                    <Image
                        source={{uri : data.backgroundImage}}
                        style={{flex  :1 , marginLeft:10,marginRight:10,borderRadius:4,resizeMode:'center'}}
                        />
                </View>

                <View style={{height:'60%',width:'57%',flexDirection:'column'}}>

                    <Text style={styles.movieName} numberOfLines={2}>{data.title}</Text>

                    <Text style={styles.movieGenre}>Action</Text>

                    <View style={styles.starContainer}>
                        <Image source={require('../images/star.png')}  style={styles.star}/>
                        <Text style={styles.rating}>{data.rating}</Text>
                    </View>

                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.imageDescription}>
                        {data.description}
                    </Text>

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonTitle}>View Details</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    imageBackground: {
        flexDirection:'row',
        width:windowWidth,
        height:windowHeight*0.45,
        justifyContent: "center",
        alignItems:'center',
        marginBottom:10

      },
      container :{
          flex : 1,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
      },
      movieName:{
          color : '#FFFBF2',
          fontSize:24,
          fontWeight:'bold'
      },
      movieGenre:{
          color : 'white',
          fontSize:14,
      },
      starContainer : {
          height:30,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center'
      },
      star :{
          width:13,
          height:13
      },
      rating : {
          color:'#FFFBF2',
          marginLeft:4
      },
      imageDescription:{
          color:'#FFFBF2',
          paddingBottom:4,
          paddingRight:8
      },
      button:{
          backgroundColor:'#ef251f',
          height:30,
          width:100,
          borderRadius:5,
          justifyContent:'center',
          alignItems:'center',
          marginTop:4
      },
      buttonTitle : {
          color : '#FFFBF2',
          textAlign:'center'
      }

})

export default CarouselCard;