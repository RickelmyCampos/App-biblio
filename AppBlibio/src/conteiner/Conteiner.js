import PageHome from '../screens/ScreenHome2';
import PageBook from '../screens/ScreenBook';
import Estilos from '../Styles/HeaderStyles'
import * as React from 'react';
import { View, Text } from 'react-native';
import DrawerContent from '../components/Box';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerHomeNavigation=createDrawerNavigator();
const Stack=createNativeStackNavigator();

function DrawerHome() {
    return(
        <DrawerHomeNavigation.Navigator drawerContent={()=>(<DrawerContent/>)}>
            <DrawerHomeNavigation.Screen name='Home' component={PageHome} options={Estilos.HeaderHome}/>
        </DrawerHomeNavigation.Navigator>
    );
    
}

function Conteiner(){
    return(
            <Stack.Navigator >
            <Stack.Screen name="DrawerHome" component={DrawerHome} options={{headerShown:false,}}/>
            <Stack.Screen name="Book" component={PageBook} options={Estilos.HeaderBook}/>
            </Stack.Navigator>
    );
}
export default Conteiner;