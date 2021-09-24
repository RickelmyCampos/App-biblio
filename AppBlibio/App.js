/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component}from 'react';
import {Text,View,} from 'react-native';
import Conteiner from './src/conteiner/Conteiner'
import {AppNavigator} from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native';

import Teste from './src/components/ComponenteTest'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button, ThemeProvider } from 'react-native-elements';

class App extends Component {
  render(){
    return (
      
      <SafeAreaProvider>
      <NavigationContainer>
        <Conteiner/>
      </NavigationContainer>
    </SafeAreaProvider>
    );
  }
 
}

export default App;


/*class App extends Component {
  render(){
    return (
      <SafeAreaProvider>
        <Componente/>
      </SafeAreaProvider>
      
    );
  }
 
}

export default App;

<NavigationContainer>
        <Conteiner/>
      </NavigationContainer>*/