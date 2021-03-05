// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Loader from './components/Loader';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home" header={null}>

<Stack.Screen 
   name="Home" 
   component={Home}  
   options={{
     title:'Movies',
     headerStyle:{ backgroundColor:'#000000'},
     headerTitleStyle:{
       fontWeight:'bold'
     }
     }}
   />
 <Stack.Screen 
   name="Detail" 
   component={Detail}  
   options={{
    ...TransitionPresets.RevealFromBottomAndroid,
    headerStyle:{ backgroundColor:'#000000'},
   headerTitleStyle:{
     fontWeight:'bold'
   }
   }}
 />
</Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;