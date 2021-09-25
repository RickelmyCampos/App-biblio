import PageHome from '../screens/ScreenHome2';
import PageBook from '../screens/ScreenBook';
import Estilos from '../Styles/HeaderStyles';
import SearchStyle from '../Styles/StyleSearch';
import * as React from 'react';
import { View, Text,Button,TouchableOpacity,TextInput } from 'react-native';
import DrawerContent from '../components/Box';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, SearchBar } from 'react-native-elements';


const DrawerHomeNavigation=createDrawerNavigator();
const Stack=createNativeStackNavigator();

function DrawerHome() {
    return(
        <DrawerHomeNavigation.Navigator drawerContent={()=>(<DrawerContent/>)}>
            <DrawerHomeNavigation.Screen name='Home' component={PageHome} options={{
        headerStyle : { 
        backgroundColor : '#17B77D' , 
      },
      title: null,
      headerTintColor : '#fff' ,
      headerRight: () => (
          <View style={{width:'100%',height:'80%',  flexDirection:'row',}}>
             <View style={SearchStyle.HeaderSearchText}>
            <TextInput placeholder="Pesquisar" placeholderTextColor='grey' style={{left:'10%',}}/>
          </View>
          <View style={SearchStyle.HeaderSearch}>
          <TouchableOpacity  onPress={()=>(alert('apertado'))}>
          <Icon  name='search'
                 color='grey' />
          </TouchableOpacity>
        </View>
       
          </View>
          
        
      ),
    } 
        } />
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