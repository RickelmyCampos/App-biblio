import React, {  useContext, useEffect, useState } from "react";
import { View, Text,Image,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";



import Estilos from '../Styles/Login'
import AuthContext from "../contexts/auth";
import firebase from "@react-native-firebase/auth";


 function Login ({navigation}){
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [erro,setErro]=useState(false);
     const [secure, setSecure] = useState(true);
     
     
     const firebaseLogin=()=>{
         firebase().signInWithEmailAndPassword(email,password).then((userCredential)=>{
             let user=userCredential.user;
             navigation.reset({
                index:0,
                routes:[{name:'DrawerHome',
            params:{idUser: user}}]
            })

         }).catch((error)=>{
             setErro(true)
             let errorCode=error.code;
             let errorMessage=error.message;
         })
     }
     useEffect(()=>{
        firebase().onAuthStateChanged(function(user){
            if(user){
                navigation.reset({
                    index:0,
                    routes:[{name:'DrawerHome',
                params:{idUser: user}}]
                })
                
            }
        })
     },[])
    
   
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

                 {erro===true?
                 <View><Text>Email ou senha inválidos</Text></View>
                 :
                 <View></View>
                 }
                 {
                     email==='' || password ===''?
                     <TouchableOpacity disabled={true} > 
                    <View style={Estilos.BotaoDisabled}>
                    <Text style={Estilos.TextBotton}>Entrar</Text>
                    </View>
                    </TouchableOpacity>
                     :
                     <TouchableOpacity  onPress={firebaseLogin}> 
                    <View style={Estilos.Botao}>
                    <Text style={Estilos.TextBotton}>Entrar</Text>
                    </View>
                    </TouchableOpacity>
                 }
                 <Text>
                     não possui uma conta?
                     <Text onPress={()=>{navigation.navigate('NewUser')}}> Cadastre-se</Text>
                 </Text>
                
            </View>
           
        );
    }
export default Login;