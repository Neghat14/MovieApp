import React from 'react';
import {View,StyleSheet,Image,Text, TouchableOpacity} from 'react-native';

const topRatedMovieUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=4a3e6f1cf9e7cebc11647e43bfc0d7f7&language=en-US&page=';
const nowPlaying="https://api.themoviedb.org/3/movie/now_playing?api_key=4a3e6f1cf9e7cebc11647e43bfc0d7f7&language=en-US&page=";

const Footer=({navigation})=>{
    return (
        <View style={styles.rootView}>

            <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
                title : 'Now Playing',
                url : nowPlaying
            })}
            >
                <View style={styles.container}>
                    <Image
                        source={require('../images/play.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Now Playing</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
                title : 'Top Rated',
                url : topRatedMovieUrl
            })}
            >
                <View style={styles.container}>
                    <Image
                        source={require('../images/trending.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Top Rated</Text>
                </View>
            </TouchableOpacity >


            <TouchableOpacity  onPress={()=>navigation.navigate('Detail',{
                title :'Upcoming',
                url : topRatedMovieUrl
            })}
            >
                <View style={styles.container}>
                    <Image
                        source={require('../images/upcoming.png')}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Upcoming</Text>
                </View>
            </TouchableOpacity>
           
        </View>
    )
}

const styles=StyleSheet.create({
    rootView : {
        width:'100%',
        marginTop:20,
    },
    container:{
        height:50,
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    image:{
        height:20,
        width:20,
        marginLeft:16
    },
    text:{
        color : '#FFFBF2',
        marginLeft:16,
        fontSize:16
    }
})


export default Footer;