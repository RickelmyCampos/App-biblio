import React from 'react';
import {Text,View,Image,StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Estilos from '../Styles/Home';
import Lista from './Lista_home'

let cor;
export default function(props){
    return(
    <SafeAreaView style={Estilos.conteiner}>
       <View style={{width:'100%',height:'40%',backgroundColor:'#17B77D'}}>
                  <Image
                   source={require('../assets/images/menu_home.png')}
                   style={Estilos.menu}
                  />
                   <View style={{width:'100%',height:'30%',flexDirection:'row'}}>

                  </View>
                  <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'space-around'}}>
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
             
      <View style={Estilos.View_Infe}>
        <View>
          <Text style={Estilos.text_Desc2}>Recentes</Text>
        </View>
        <View>
          <Text style={Estilos.text_Desc2}>Gêneros</Text>
        </View>
        <View>
          <Text style={Estilos.text_Desc2} >Favoritos</Text>
        </View>
       
    </View>
    </SafeAreaView>

           
    );
}

<SafeAreaView style={Estilos.conteiner}>
      <View>
      <View style={{width:'100%',height:'45%',backgroundColor:'#17B77D'}}>
                  <Image
                   source={require('../assets/icons/menu_home.png')}
                   style={Estilos.menu}
                  />
                  <View style={{width:'100%',height:'30%',flexDirection:'row',justifyContent:'space-around'}}>
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
      <View >
         <ScrollView >
         <View style={Estilos.View_Infe}>
        <View>
          <Text style={Estilos.text_Desc2}>Recentes</Text>
          <Text>HAHAHAHA</Text>
        </View>
        <View>
          <Text style={Estilos.text_Desc2}>Gêneros</Text>
          <Text>HAHAHAHA</Text>
        </View>
        <View>
          <Text style={Estilos.text_Desc2} >Favoritos</Text>
          <Text>HAHAHAHA</Text>
          <Text>HAHAHAHA</Text>
          <Text>HAHAHAHA</Text><Text>HAHAHAHA</Text><Text>HAHAHAHA</Text><Text>Alguma coisa importante</Text>
        </View>
       
    </View>
         </ScrollView>
       </View>
      </View>
    </SafeAreaView>