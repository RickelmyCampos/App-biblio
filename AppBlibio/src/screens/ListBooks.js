import axios from 'axios';
import api from '../services/api'
import React ,{Component, useEffect,useState}from 'react';
import Estilos from '../Styles/Lists'
import {Image,Text,View,FlatList,ScrollView,TouchableOpacity} from 'react-native';

import {AppNavigator} from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Button, ThemeProvider } from 'react-native-elements';


const Generos=[
    {
      id:'001',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
    {
      id:'002',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
    {
      id:'003',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
    {
      id:'004',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
    {
      id:'005',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
    {
      id:'006',
      uri:require('../assets/images/genero.png'),
      Nome:'Gênero',
    } ,
  ]
const Lista=({item})=>{
    return(<View style={Estilos.ItemsGenero}>
      <Image
        source={item.uri}//
        resizeMode='cover'
        style={Estilos.imageGenero}
      />
      <Text style={Estilos.textItem}>{item.Nome}</Text>
    </View>)
  }

function List({navigation}){
    const [books, setBooks] = useState([])
  
    useEffect(() => {
        // sujeitoprogramador.com/ + r-api/?api=filmes
        async function loadBooks(){
            const response = await api.get('books')
            console.log(response.data)
            setBooks(response.data)
        }
        
        loadBooks()
    }, [])
    return(
        <SafeAreaProvider>
        <View style={Estilos.booksStyle}>
        <View style={Estilos.supLabel}>
        <Text style={Estilos.text_Desc2}>Gêneros</Text>
        <View >
            <FlatList
                data={Generos}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity >{Lista({item})}</TouchableOpacity>)}
              />
          </View>
        </View>
        <View style={Estilos.infLabel}>
         
        <FlatList
                data={books}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity ><View style={Estilos.BoxBook}>
                    <Text style={Estilos.TextPrinc}>{item.NomeLivro}</Text>
                    <Text style={Estilos.Text_sec}>{item.Autor}</Text>
                    </View></TouchableOpacity>)}
              />
              </View>

  
        </View>
        </SafeAreaProvider>
    );
  }

  export default List;