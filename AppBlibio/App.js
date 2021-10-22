/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component, useEffect,useState}from 'react';
import {Text,View,FlatList,ScrollView} from 'react-native';
import Conteiner from './src/routes/app.routes'

import { NavigationContainer } from '@react-navigation/native';


import { SafeAreaProvider } from 'react-native-safe-area-context';







  
 
class App extends Component {
  
  render(){
    
    return(
      <NavigationContainer>

          <SafeAreaProvider>
          <Conteiner/> 
          </SafeAreaProvider>
      </NavigationContainer>
          )
  }
}
 
//<Conteiner/>     {this.state.users.map((user,index)=><View key={index}><Text>{user.nome}-{user.idade}</Text> </View>)}

export default App;


/*class App extends Component {
  render(){
    return (
     
      
    );
  }
 
}

export default App;
<NavigationContainer>
        <SafeAreaProvider>
      <Conteiner/>
      </SafeAreaProvider>
    </NavigationContainer>

<NavigationContainer>
        <Conteiner/>
      </NavigationContainer>*/