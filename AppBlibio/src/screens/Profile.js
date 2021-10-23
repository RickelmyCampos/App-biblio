import React, { useState } from "react";
import { Text, View,StyleSheet,TouchableOpacity, Modal,TouchableWithoutFeedback, TextInput } from "react-native";
import{Avatar,Accessory} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Profile({route}){
    const perfil=route.params
    const [visivel,setVisivel]=useState(false)
    const [nome,setNome]=useState('')
    console.log(perfil)
    

    return(
        <View style={{flex:1, backgroundColor:'#E9FBD4'}}>
            <View style={Estilo.conteiner1}>
                <Avatar  size='xlarge' rounded icon={{name: 'user', color: '#fff',type: 'font-awesome',size:100}} overlayContainerStyle={{backgroundColor: 'gray'}}>
                    <Accessory name='camera-alt' size={40}/>
                </Avatar>
            </View>
            <View style={Estilo.conteiner2}>
                <View style={Estilo.informations}>
                    <View>
                    <Text style={Estilo.TextPrinc}>
                        Nome do Usuário
                    </Text>
                    <Text style={Estilo.Text_sec}>
                        {perfil.displayName}
                    </Text>
                    </View>
                    <TouchableOpacity onPress={()=>{setVisivel(true)}}>
                        <Icon name='edit' size={20} />
                    </TouchableOpacity>
                </View>
                <View style={Estilo.informations}>
                    <View>
                    <Text style={Estilo.TextPrinc}>
                        Email
                    </Text>
                    <Text style={Estilo.Text_sec}>
                        {perfil.email}
                    </Text>
                    </View>
                </View>
                <View style={Estilo.informations}>
                    <View>
                    <Text style={Estilo.TextPrinc}>
                        Quantidades de livros
                    </Text>
                    <Text style={Estilo.Text_sec}>
                        5
                    </Text>
                    </View>
                </View>

                

            </View>
            <Modal animationType='slide' transparent={true} visible={visivel} >
                <View style={{height:'100%',flexDirection:'column-reverse'}}>
                <Modal  animationType='none' transparent={true} visible={visivel}>
                <View style={{flex:1,backgroundColor:'black',opacity:0.5}}>
                
            </View>
            </Modal>
                
                    <View style={{flex:1,backgroundColor:'#D5EEBB',}}>
                    <TextInput 
                        maxLength={39}
                        style={Estilo.Inputs} 
                        placeholderTextColor='grey'
                        placeholder="Novo nome de usuário"
                        value={nome}  
                        onChangeText={nome=>setNome(nome)}
                        />
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <TouchableOpacity onPress={()=>{setVisivel(false)}}>
                                <View style={Estilo.Botao}>
                                    <Text style={Estilo.textBotao}>Cancelar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={Estilo.Botao}>
                                    <Text style={Estilo.textBotao}>Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    
                    </View>
                    <TouchableWithoutFeedback onPress={()=>{setVisivel(false)}}>
                    <View style={{flex:3,backgroundColor:'black',opacity:0}}></View>
                 </TouchableWithoutFeedback>
                </View>
            </Modal>
           
        </View>
        
    );
}

export default Profile;
const Estilo= StyleSheet.create({
    conteiner1:{
        alignItems:'center',
        justifyContent:'center',
        height:'40%'
    },
    conteiner2:{
        height:"60%",
       
        
    },
    informations:{
        flexDirection:'row',
        paddingLeft:30,
        paddingRight:20,
        paddingVertical:10,
        marginHorizontal:30,
        marginBottom:5,
        alignSelf:'stretch',
        borderRadius:7,
        backgroundColor:'#D5EEBB',
        justifyContent:'space-between',
        alignItems:'center'
    },
    TextPrinc:{
        fontSize:20,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        fontWeight:'bold',
       
        color:'#5F7A61'

      
    },
    Text_sec:{
        fontSize:15,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        color:'#444941'
    },
    Inputs:{
        height:45,
        marginHorizontal:30,
        marginTop:10,
        borderColor:'#7FC8A9',
        color:'#444941',
        marginBottom:10,
        alignSelf:'stretch',
        borderWidth:3,
        borderRadius:9
        
    },
    Botao:{
        backgroundColor:'#7FC8A9',
        width:wp('30%'),
        height:hp('6%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    textBotao:{
        fontSize:15,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        color:'white',
        fontWeight:'bold'
    }
})