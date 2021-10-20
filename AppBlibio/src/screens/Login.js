import React, {  useContext, useState } from "react";
import { View, Text,Image,TextInput,TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";

import Estilos from '../Styles/Login'
import AuthContext from "../contexts/auth";


 function Login (){
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [secure, setSecure] = useState(true)
     
     const {signed,user,Logar,erro}=useContext(AuthContext);
     
    
     function HandleSignIn(){
        Logar(email,password);
     }
     function Erro(){
         if (erro==true){
             console.log(erro)
             return(<Text style={{color:'red',}}> Email ou Senha erradas</Text>)
         }
        }

   
    return(

            <View style={Estilos.conteiner}>
                <View style={Estilos.View}>
                <TextInput 
                    maxLength={52}
                    style={Estilos.Inputs} 
                    placeholderTextColor='grey'
                    placeholder="Digite seu email" 
                    value={email} 
                    onChangeText={email=>setEmail(email)}/>
                    </View>
                    <View style={Estilos.View}>
                <TextInput 
                maxLength={39}
                style={Estilos.Inputs} 
                secureTextEntry={secure}
                placeholderTextColor='grey'
                placeholder="Digite sua senha"
                value={password}  
                onChangeText={password=>setPassword(password)}
                />
                 <Icon
                 style={{right:10}}
                name={secure ? 'eye-off' : 'eye'}
                size={20}
                color="grey"
                onPress={() => setSecure(!secure)}/>
                </View>

                 {Erro()}
                <TouchableOpacity onPress= {HandleSignIn}> 
                    <View style={Estilos.Botao}>
                    <Text style={Estilos.TextBotton}>Logar</Text>
                    </View>
                </TouchableOpacity>
               
            </View>
        );
    }
export default Login;