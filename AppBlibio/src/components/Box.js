import React, { useContext } from "react";;
import { View, Text,Image, SafeAreaView, ImagePropTypes,TouchableOpacity} from 'react-native';
import Estilo from '../Styles/drawerHomeStyles'
import{Avatar,Accessory} from 'react-native-elements'
import AuthContext from "../contexts/auth";
import  firebase  from "@react-native-firebase/auth";





function DrawerContent (props) {
  const perfil=props.valores

  const {navigation}=props;
  function Sair(){
      firebase().signOut().then(()=>{
        navigation.reset({
          index:0,
          routes:[{name:'Login'}]
      })
      }).catch((error)=>{
        
      })
  }
  return(
<SafeAreaView>
  <View style={Estilo.Perfil}>
    <View style={{justifyContent:'center',
      alignItems:'center'}}>
        
        <Avatar  size='xlarge' rounded icon={{name: 'user', color: '#fff',type: 'font-awesome',size:100}} overlayContainerStyle={{backgroundColor: 'gray'}}
        >
          <Accessory iconStyle={{fontSize:20}} style={{fontSize:50,backgroundColor:'gray',width:'15%',height:'15%',borderRadius:100}}/>
        </Avatar>
        
    
  
       
       <Text style={{fontSize:18,fontFamily:'Rubik Medium',fontWeight: 'bold',textAlign:'center',color:'#444941'}}>nome</Text>
       <Text style={{fontSize:15,fontFamily:'Rubik Medium',textAlign:'center',color:'#444941'}}onPress={()=>navigation.navigate('Profile',perfil)}>Ver Perfil</Text>
    </View>
    
  </View>
  <View style={Estilo.Configs}>
   <View style={{marginTop:'10%',marginLeft:'5%'}}>
    <Text style={Estilo.TextConfigs}>Amigos</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Cadastro',perfil.uid)}><Text style={Estilo.TextConfigs}>Cadastrar</Text></TouchableOpacity>
    <TouchableOpacity ><Text style={Estilo.TextConfigs}>Meus Livros</Text></TouchableOpacity>
    <TouchableOpacity ><Text style={Estilo.TextConfigs}>Configurações</Text></TouchableOpacity>
    <TouchableOpacity onPress={Sair} ><Text style={Estilo.TextConfigs}>Sair</Text></TouchableOpacity>
    </View>
    </View>
    
    </SafeAreaView>
);
}


export default DrawerContent;