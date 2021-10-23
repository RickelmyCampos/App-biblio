import React,{useEffect,useState}from 'react';
import api from '../services/api'
import { Text,View,Image,StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import Estilos from '../Styles/Home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';


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

function PageHome ({ navigation,valores}) {
  const [books, setBooks] = useState([])
  function deleteBook(id){
    firestore().collection(valores.uid).doc(id).delete()
  }
  
    useEffect(() => {
        // sujeitoprogramador.com/ + r-api/?api=filmes
       firestore().collection(valores.uid).onSnapshot((query)=>{
         const List=[]
         query.forEach((doc)=>{
           List.push({...doc.data(),id:doc.id})
         })
         setBooks(List)
       })
    }, [])
  return(
<SafeAreaView style={Estilos.conteiner}>
      <StatusBar backgroundColor='#7FC8A9'/>
      <View >
     <ScrollView  >
     <View style={{width:wp('100%'),height:hp('30%'),flexDirection:'row',flex:1,padding:'7%',backgroundColor:'#7FC8A9',}}>
                      <View style={{height:wp('100%'),width:hp('90%'),flex:1,flexDirection:'row',right:'14%'}}>
                        <View style={{flexDirection:'column',width:wp('50%')}}>
                      <Text style={Estilos.text_Desc}>Meta de Leitura mensal</Text>
                      <Text style={Estilos.text_Value}>4/10</Text>
                      </View>
                    
                      <View style={{flexDirection:'column',width:wp('50%'),}}>
                        <Text style={Estilos.text_Desc}>Total de Livros</Text>
                        <Text style={Estilos.text_Value}>50</Text>
                      </View>
                      </View>
                  </View>
       <View >
     <View style={{width:wp('100%'),}}>
     <Text style={Estilos.text_Desc2}>Recentes</Text>
          <View >
            <FlatList
                data={Recentes}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity >{List({item})}</TouchableOpacity>)}
              />
          </View>
        </View>
        
        <View style={{width:wp('100%')}}>
        <Text style={Estilos.text_Desc2}>Favoritos</Text>
        <View >
            <FlatList
                data={Generos}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity onPress={() => navigation.navigate('List')}>{List({item})}</TouchableOpacity>)}
              />
          </View>
        </View>

        <View style={{width:wp('100%')}}>
        <Text style={Estilos.text_Desc2} >Lista de Desejos</Text>
        <View style={{width:wp('100%'),alignItems:'center', backgroundColor:'#D5EEBB',marginBottom:hp('5%')}}>
        <View style={Estilos.infLabel}>
         
         <FlatList
                 data={books}
                 keyExtractor={item=>item.id}
                 renderItem={({item})=>(<View><View style={Estilos.BoxBook}>
                   <TouchableOpacity onPress={() => (navigation.navigate('Book',item))}>
                   <View style={{width:wp('60%'),  }}>
                     <Text style={Estilos.TextPrinc}>{item.NomeLivro}</Text>
                     <Text style={Estilos.Text_sec}>{item.Autor}</Text>
                     </View>
                     </TouchableOpacity>
                     <View style={{ width:wp('20%'),flexDirection:'row', alignItems:'center',justifyContent:'space-around',padding:0, right:10}}>
                     <TouchableOpacity onPress={()=>{
                       deleteBook(item.id)
                     }}>
                       <View style={{padding:6}}>
                     <Icon name='trash-2' size={20}
                            color='grey' />
                          </View >
                            </TouchableOpacity>
                            <TouchableOpacity >
                              <View style={{padding:6}}>
                      <Icon name='check' size={20}
                            color='grey' />
                            </View>
                            </TouchableOpacity>
                     </View>
                     </View></View>)}
               />
               </View>
          </View>
          
        </View>
        </View>
        </ScrollView>
        </View>
    
        
   
    </SafeAreaView>
);
}


export default PageHome;