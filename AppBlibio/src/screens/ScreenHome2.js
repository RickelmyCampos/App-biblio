import React from 'react';
import { Text,View,Image,StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList} from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import Estilos from '../Styles/Home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
function PageHome ({ navigation }) {
  return(
<SafeAreaView style={Estilos.conteiner}>
      <StatusBar backgroundColor='#17B77D'/>
      <View style={{width:wp('100%'),height:hp('30%'),flexDirection:'row',flex:1,padding:'7%',backgroundColor:'#17B77D',}}>
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

      
     <View style={{width:wp('100%'),height:hp('70%')}}>
     <ScrollView >
       <View >
     <View style={{width:wp('100%'),}}>
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
        
        <View style={{width:wp('100%')}}>
        <Text style={Estilos.text_Desc2}>Gêneros</Text>
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
        <Text style={Estilos.text_Desc2} >Favoritos</Text>
        <View >
            <FlatList
                data={Favoritos}
                horizontal
                keyExtractor={item=>item.id}
                renderItem={({item})=>(<TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}>{List({item})}</TouchableOpacity>)}
              />
          </View>
          
        </View>
        </View>
        </ScrollView>
     </View>
        
   
    </SafeAreaView>
);
}


export default PageHome;