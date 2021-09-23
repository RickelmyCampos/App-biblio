import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer'
import Box from '../components/Box';
import {LogBox } from 'react-native';
import TelaLivro from './ScreenLivro'
LogBox.ignoreLogs(['Reanimated 2']);

function HomeScreen({navigation}) {
    return (
     <Box/>
    );
  }
  function segundaTela({navigation}) {
    return (
     <TelaLivro/>
    );
  }
function PageHome({navigation}){
    const drawer=createDrawerNavigator();
      return(
        <NavigationContainer>
        <drawer.Navigator>
          <drawer.Screen name="Home" component={HomeScreen} 
          options={{
            title:'Tela Inicial',
            headerTintColor:'#fff',
            headerStyle:{backgroundColor: '#17B77D',},
            headerTitleStyle: {
                fontWeight: 'bold',
              },
            
          }}/>
          <drawer.Screen name="Segunda " component={segundaTela} 
          options={{
            title:'Segunda tela',headerStyle:{backgroundColor: '#17B77D',},headerTintColor:'#fff'
          }}/>
        </drawer.Navigator>
      </NavigationContainer>
      );
  }

  export default  PageHome;