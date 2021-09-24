import React from "react";;
import { View, Text,Image} from 'react-native';
import Estilo from '../Styles/drawerHomeStyles'



function DrawerContent () {
  return(
<View>
  <View style={Estilo.Perfil}>
    <View style={{justifyContent:'center',
      alignItems:'center'}}>
    <Image
       source={require('../assets/images/Foto.png')}//
       resizeMode='cover'
       style={Estilo.Foto}/>
       <Text style={{fontSize:18,fontFamily:'Rubik Medium',fontWeight: 'bold',textAlign:'center'}}>Nome Completo</Text>
       <Text style={{fontSize:15,fontFamily:'Rubik Medium',textAlign:'center'}}>Ver Perfil</Text>
    </View>
    
  </View>
  <View style={Estilo.Configs}>
   <View style={{marginTop:'10%',marginLeft:'5%'}}>
    <Text style={Estilo.TextConfigs}>Amigos</Text>
    <Text style={Estilo.TextConfigs}>Meus Livros</Text>
    <Text style={Estilo.TextConfigs}>Configurações</Text>
   
    </View>
    </View>
    <View >
      <Text style={Estilo.TextBot}>Criado e Desenvolvido Por</Text>
      <Text style={Estilo.TextBot}>Gilberson Rickelmy</Text>
    </View>
</View>
);
}


export default DrawerContent;