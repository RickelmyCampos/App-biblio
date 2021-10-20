import PageHome from '../screens/ScreenHome2';
import PageBook from '../screens/ScreenBook';
import PageListBook from '../screens/ListBooks';
import PageCadastro from '../screens/ScreenCadastro';
import Estilos from '../Styles/HeaderStyles';
import SearchStyle from '../Styles/StyleSearch';
import  React,{useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text,Button,TouchableOpacity,TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import DrawerContent from '../components/Box';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, SearchBar } from 'react-native-elements';


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);




const DrawerHomeNavigation=createDrawerNavigator();
const Stack=createNativeStackNavigator();

function DrawerHome() {
    const [visivel,setVisivel]=useState(false)
    return(
        <DrawerHomeNavigation.Navigator drawerContent={(props)=>(<DrawerContent {...props}/>)}>
            <DrawerHomeNavigation.Screen name='Home' component={PageHome} options={{
        headerStyle : { 
        backgroundColor : '#7FC8A9' , 
      },
      title: null,
      headerTintColor : '#fff' ,
      headerRight: () => (
          <View style={SearchStyle.HeaderSearch}>
          <TouchableOpacity  onPress={()=>{setVisivel(true)}}>
          <Icon  name='search'
                 color='grey' />
          </TouchableOpacity>
          <Modal animationType='none' transparent={true} visible={visivel} style={{flexDirection:'row'}} >
            <View > 
          <View style={SearchStyle.HeaderSearchText}>
            <View style={{width:wp('80%')}}>
            <TextInput placeholder="Pesquisar" placeholderTextColor='grey' style={{left:'10%',}}/>
            </View>
            <View style={{width:wp('20%'),justifyContent:'center',}}>
            <TouchableOpacity  onPress={()=>{setVisivel(false)}}>
          <Icon  name='cancel'
                 color='grey' />
          </TouchableOpacity>
          </View>
          </View>
          <TouchableWithoutFeedback onPress={()=>{setVisivel(false)}}>
              <View style={{height:hp('92.5%'),backgroundColor:'black',opacity:0.5}}></View>
          </TouchableWithoutFeedback>
        </View>
          </Modal>
        </View>   
      ),
    } 
        } />
        </DrawerHomeNavigation.Navigator>
    );
    
}

function Conteiner(){
    return(<View style={{height:hp('100%'),width:wp('100%')}}>
      <Stack.Navigator >
            <Stack.Screen name="DrawerHome" component={DrawerHome} options={{headerShown:false,}}/>
            <Stack.Screen name="Book" component={PageBook} options={Estilos.HeaderBook}/>
            <Stack.Screen name="List" component={PageListBook} options={Estilos.HeaderBook}/>
            <Stack.Screen name="Cadastro" component={PageCadastro} options={Estilos.HeaderBook}/>
            </Stack.Navigator>
    </View>
            
            
    );
}
export default Conteiner;