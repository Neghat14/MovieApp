import React ,{useState,useEffect,useRef, useReducer}from 'react';
import {View,Text,StyleSheet, FlatList,ScrollView, Dimensions, TouchableOpacity, requireNativeComponent} from 'react-native';
import CarouselCard from '../components/CarouselCard';
import PopularMovieCard from '../components/PopularMovieCard';
import Footer from '../components/Footer';

const axios = require('axios');

const topRatedMovieUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=4a3e6f1cf9e7cebc11647e43bfc0d7f7&language=en-US&page=1';
const popularMovieUrl='https://api.themoviedb.org/3/movie/popular?api_key=4a3e6f1cf9e7cebc11647e43bfc0d7f7&language=en-US&page=1';
const imagePathUrl="https://image.tmdb.org/t/p/w500";


const Home=({navigation})=>{

    const firstFlatList=useRef();
    const [topListData,setTopListData]=useState([]);
    const [secondListData,setSecondListData]=useState([]);

    useEffect(()=>{
        axios.get(topRatedMovieUrl).then((response)=>{
            const fetchedData=response.data.results;
            const list=[];
            for(let i=0;i<fetchedData.length;i++){
                const requiredData={
                    id : fetchedData[i].id,
                    title : fetchedData[i].original_title,
                    rating : fetchedData[i].vote_average,
                    backgroundImage : imagePathUrl+fetchedData[i].poster_path,
                    foregroundImage : imagePathUrl+fetchedData[i].backdrop_path,
                    description: fetchedData[i].overview,
                }
                list.push(requiredData);
            }
            setTopListData(list);
            makeFlatListScollable(list.length);
        })
        let turl=popularMovieUrl.concat("1");

        axios.get(turl).then((response)=>{
            const fetchedData=response.data.results;
            const list=[];
            for(let i=0;i<fetchedData.length;i++){
                const requiredData={
                    id : fetchedData[i].id,
                    title : fetchedData[i].original_title,
                    backgroundImage : imagePathUrl+fetchedData[i].poster_path
                }
                list.push(requiredData);
            }
            setSecondListData(list);
        })

    },[]);

    const makeFlatListScollable=(len)=>{
        let scrolled=0;
        setInterval(()=>{
            scrolled=(scrolled+1)%len;
            if(firstFlatList.current){
                firstFlatList.current.scrollToIndex({ animated: true, index: scrolled})
            }
        },4000);
    }


    return (
        <ScrollView style ={{flex : 1}}> 
            <View style={styles.rootView}>

                <FlatList
                    ref={firstFlatList}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={topListData}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item,index})=><CarouselCard data={item} index={index}/>}
                />

                <View style={styles.secondFlatListHeader}>
                    <Text style={styles.popularText}>Popular</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
                        title : 'Popular',
                        url : popularMovieUrl
                    })}
                    >
                         <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                   horizontal
                   pagingEnabled
                   showsHorizontalScrollIndicator={false}
                   data={secondListData}
                   keyExtractor={(item)=>item.id.toString()}
                   renderItem={({item})=><PopularMovieCard data={item}/>}
                />  
               <Footer
                   navigation={navigation}
                />              

            </View>
        </ScrollView>
        
    )
}

const styles=StyleSheet.create({
    rootView: {
        flex : 1,
        alignItems:'center'
    },
    secondFlatListHeader:{
        height:50,
        width:'100%',
        flexDirection:'row',
        marginTop:14,
        marginBottom:12,
        justifyContent:'space-between'
        
    },
    popularText:{
        color : '#FFFBF2',
        fontSize:20,
        fontWeight:'bold',
        marginTop:12,
        marginLeft:10,
        textAlign:'center'
    },
    seeAllText:{
        color : '#FFFBF2',
        fontSize:18,
        padding:16,
        textAlign:'center'

    }
})


export default Home;