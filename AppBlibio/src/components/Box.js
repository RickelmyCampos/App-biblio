import React from "react";;
import { View, Text,Image, SafeAreaView, ImagePropTypes,TouchableOpacity} from 'react-native';
import Estilo from '../Styles/drawerHomeStyles'
import{Avatar,Accessory} from 'react-native-elements'
import { color } from "react-native-reanimated";




function DrawerContent (props) {
  const {navigation}=props;
  return(
<SafeAreaView>
  <View style={Estilo.Perfil}>
    <View style={{justifyContent:'center',
      alignItems:'center'}}>
        
        <Avatar  size='xlarge' rounded icon={{name: 'user', color: '#fff',type: 'font-awesome',size:100}} overlayContainerStyle={{backgroundColor: 'gray'}}
        >
          <Accessory iconStyle={{fontSize:20}} style={{fontSize:50,backgroundColor:'gray',width:'15%',height:'15%',borderRadius:100}}/>
        </Avatar>
        
    
  
       
       <Text style={{fontSize:18,fontFamily:'Rubik Medium',fontWeight: 'bold',textAlign:'center'}}>Nome Completo</Text>
       <Text style={{fontSize:15,fontFamily:'Rubik Medium',textAlign:'center'}}>Ver Perfil</Text>
    </View>
    
  </View>
  <View style={Estilo.Configs}>
   <View style={{marginTop:'10%',marginLeft:'5%'}}>
    <Text style={Estilo.TextConfigs}>Amigos</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')}><Text style={Estilo.TextConfigs}>Cadastrar</Text></TouchableOpacity>
    <Text style={Estilo.TextConfigs}>Meus Livros</Text>
    <Text style={Estilo.TextConfigs}>Configurações</Text>
    
    <Text style={Estilo.TextConfigs}>Sair</Text>
   
    </View>
    </View>
    <View style={Estilo.viewcredentials}>
      <Text style={Estilo.TextBot}>Criado e Desenvolvido Por</Text>
      <Text style={Estilo.TextBot}>Gilberson Rickelmy</Text>
    </View>
    </SafeAreaView>
);
}


export default DrawerContent;