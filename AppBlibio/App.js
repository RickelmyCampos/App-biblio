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

class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Conteiner/>
      </NavigationContainer>
    );
  }
 
}

export default App;
