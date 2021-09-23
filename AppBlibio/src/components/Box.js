import React, { useState } from 'react';
import {Text,View,Image,StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Estilos from '../Styles/Home';



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
const Recentes=[
  {
    id:'001',
    uri:require('../assets/images/suspense.png'),
    Nome:'Suspense',
  },
  
  {
    id:'002',
    uri:require('../assets/images/suspense.png'),
    Nome:'Suspense',
  },
  {
    id:'003',
    uri:require('../assets/images/suspense.png'),
    Nome:'Suspense',
  },
  {
    id:'004',
    uri:require('../assets/images/suspense.png'),
    Nome:'Suspense',
  },
  {
    id:'005',
    uri:require('../assets/images/suspense.png'),
    Nome:'Suspense',
  },
]
const Favoritos=[
  {  
    id:'001',
    uri:require('../assets/images/terror.png'),
    Nome:'Terror',
},  {  
  id:'002',
  uri:require('../assets/images/terror.png'),
  Nome:'Terror',
},
{  
  id:'003',
  uri:require('../assets/images/terror.png'),
  Nome:'Terror',
},
{  
  id:'004',
  uri:require('../assets/images/terror.png'),
  Nome:'Terror',
},
{  
  id:'005',
  uri:require('../assets/images/terror.png'),
  Nome:'Terror',
},
]

const List=({item})=>{
  return(<View style={Estilos.ItemsGenero}>
    <Image
      source={item.uri}//
      resizeMode='cover'
      style={Estilos.imageGenero}
    />
    <Text style={Estilos.textItem}>{item.Nome}</Text>
  </View>)
}

export default function(props){
 
    return(
    <SafeAreaView style={Estilos.conteiner}>
      <StatusBar backgroundColor='#17B77D'/>
      <View style={{width:'100%',height:'25%',backgroundColor:'#17B77D'}}>
      
      <View style={{width:'100%',height:'60%',flexDirection:'row',justifyContent:'space-around'}}>
                      <View style={{flexDirection:'column'}}>
                      <Text style={Estilos.text_Desc}>Meta de Leitura mensal</Text>
                      <Text style={Estilos.text_Value}>4/10</Text>
                      </View>
                    
                      <View style={{flexDirection:'column',}}>
                        <Text style={Estilos.text_Desc}>Total de Livros</Text>
                        <Text style={Estilos.text_Value}>50</Text>
                      </View>

                  </View>

      </View>
     <View style={{height:'100%',height:'75%'}}>
     <ScrollView >
       <View >
     <View style={{width:'100%',}}>
     <Text style={Estilos.text_Desc2}>Recentes</Text>
          <View >
            <FlatList
                data={Recentes}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity onPress={() => navigation.navigate('Book')}>{List({item})}</TouchableOpacity>)}
              />
          </View>
        </View>
        
        <View style={{width:'100%'}}>
        <Text style={Estilos.text_Desc2}>Gêneros</Text>
        <View >
            <FlatList
                data={Generos}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity>{List({item})}</TouchableOpacity>)}
              />
          </View>
        </View>

        <View style={{width:'100%'}}>
        <Text style={Estilos.text_Desc2} >Favoritos</Text>
        <View >
            <FlatList
                data={Favoritos}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity>{List({item})}</TouchableOpacity>)}
              />
          </View>
          
        </View>
        </View>
        </ScrollView>
     </View>
        
   
    </SafeAreaView>

           
    );
}