import React from "react";;
import { View, Text,Image, SafeAreaView} from 'react-native';
import Estilo from '../Styles/drawerHomeStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Avatar,Button, ThemeProvider } from 'react-native-elements';

 function Teste() {
    return(
        
         <SafeAreaProvider>
         <ThemeProvider>
            <Button title="Hey"/>
            <Avatar rounded icon={{ name: 'home' }} />
        </ThemeProvider>
       </SafeAreaProvider>
    );
    
}
export default Teste();