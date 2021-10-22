import React, {  useContext, useEffect, useState } from "react";
import { View, Text,Image,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";


import Estilos from '../Styles/Login'
import AuthContext from "../contexts/auth";
import  firebase  from "@react-native-firebase/auth";
import { createIconSetFromFontello } from "react-native-vector-icons";


 function NewUser ({navigation}){
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [repassword,setRepassword]=useState('');
     const [erro,setErro]=useState(false);
     const [erroPass,setErroPass]=useState(false);
     const [secure, setSecure] = useState(true);
    
     const createFirebaseLogin=()=>{
         setErro(false)
         setErroPass(false)
         if(password==repassword){
            firebase().createUserWithEmailAndPassword(email,password).then((userCredential)=>{
                let user=userCredential.user;
                navigation.navigate("Login")
    
            }).catch((error)=>{
                setErro(true)
                console.log(error)
                let errorCode=error.code;
                let errorMessage=error.message;
            })
         }else{setErroPass(true)}
        
         
        
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
                <View style={Estilos.View}>
                <TextInput 
                maxLength={39}
                style={Estilos.Inputs} 
                secureTextEntry={secure}
                placeholderTextColor='grey'
                placeholder="Confirme sua senha"
                value={repassword}  
                onChangeText={password=>setRepassword(password)}
                />
                 <Icon
                 style={{right:10}}
                name={secure ? 'eye-off' : 'eye'}
                size={20}
                color="grey"
                onPress={() => setSecure(!secure)}/>
                </View>
                {erro===true?
                 <View><Text>no minimo 6 caracteres</Text></View>
                 :
                 <View></View>
                 }
                 {erroPass===true?
                 <View><Text>as senhas não são iguais</Text></View>
                 :
                 <View></View>
                 }
                 {
                     email==='' || password ==='' || repassword===''?
                     <TouchableOpacity disabled={true} > 
                    <View style={Estilos.BotaoDisabled}>
                    <Text style={Estilos.TextBotton}>Registrar</Text>
                    </View>
                    </TouchableOpacity>
                     :
                     <TouchableOpacity onPress={createFirebaseLogin}> 
                    <View style={Estilos.Botao}>
                    <Text style={Estilos.TextBotton}>Registrar</Text>
                    </View>
                    </TouchableOpacity>
                 }
                  <Text onPress={()=>{navigation.navigate('Login')}}>
                     Já possuo conta
                 </Text>
                
            </View>
           
        );
    }
export default NewUser;