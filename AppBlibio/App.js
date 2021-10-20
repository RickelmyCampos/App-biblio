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
import {AppNavigator} from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native';

import Teste from './src/components/ComponenteTest'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button, ThemeProvider } from 'react-native-elements';

import Login from './src/screens/Login'
import Routes from './src/routes'
import {AuthProvider} from './src/contexts/auth';



  
 
class App extends Component {
  render(){
    
    return(
      <NavigationContainer>
        <AuthProvider>
          <SafeAreaProvider>
            <Routes/>
          </SafeAreaProvider>
        </AuthProvider>
      </NavigationContainer>
          )
  }
}
 
//<Conteiner/>

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