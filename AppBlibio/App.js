/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component, useEffect,useState}from 'react';
import {Text,View,FlatList,ScrollView} from 'react-native';
import Conteiner from './src/conteiner/Conteiner'
import {AppNavigator} from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native';

import Teste from './src/components/ComponenteTest'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button, ThemeProvider } from 'react-native-elements';
import Lista from './src/screens/ListBooks'



  
 
class App extends Component {
  render(){
    
    return(
      <NavigationContainer>
        <SafeAreaProvider>
      <Conteiner/>
      </SafeAreaProvider>
    </NavigationContainer>)
  }
}
 


export default App;


/*class App extends Component {
  render(){
    return (
     
      
    );
  }
 
}

export default App;

<NavigationContainer>
        <Conteiner/>
      </NavigationContainer>*/