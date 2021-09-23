import PageHome from '../screens/ScreenHome2';
import PageBook from '../screens/ScreenBook';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack=createNativeStackNavigator();
function Conteiner(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={PageHome}/>
            <Stack.Screen name="Book" component={PageBook} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Conteiner;