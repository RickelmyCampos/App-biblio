import React,{useState}from 'react';
import { View, Text,Image} from 'react-native';
import Estilos from '../Styles/Book';
import {LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import{Avatar} from 'react-native-elements'


 

  

function PageBook ({ route,navigation }){
const book= route.params;
       
    return(
        <View>
         <ScrollView>
         <View style={Estilos.Label_sup}>
             <View style={{flex:1,width:'48%', justifyContent:'center'}}>
             <Avatar  size='large' icon={{name: 'book', color: '#fff',type: 'font-awesome',}} overlayContainerStyle={{backgroundColor: '#444941'}}/>
            </View >
            <View style={Estilos.view2,{width:'52%'}}>
                <Text style={Estilos.Text_top}>{book.NomeLivro}</Text>
                <Text style={Estilos.Text_bot}>{book.Autor}</Text>
                <Text style={Estilos.Text_bot}>{book.Ano}</Text>
                <Text style={Estilos.Text_bot}>{book.Genero}</Text>
                <View style={{flex:1,flexDirection:'row',width:'100%', justifyContent:'space-between', borderTopWidth:1,borderTopColor:'#444941',padding:5}}>
                    
                    <Icon1 name='checkcircleo' size={40}
                            color='#444941' />
                     <Icon2 name='book-outline' size={40}
                            color='#444941' />
                    <Icon3 name='favorite-outline' size={40}
                            color='#444941' />
                </View>
            </View>
        </View>
        <View style={Estilos.Label_inf}>
        <Text style={Estilos.Text_princ}>Descrição</Text>
        <Text style={Estilos.Text_sec}>{book.Descrição}</Text>
        <Text style={Estilos.Text_princ}>Minhas Notas</Text>
        <Text style={Estilos.Text_sec}> Sem notas adicionadas</Text>

        </View>
        
         </ScrollView>
     </View>
    );
}
  



export default PageBook;