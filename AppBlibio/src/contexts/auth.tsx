import React, { createContext,useEffect,useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";


interface AuthContextData{
    signed:boolean;
    erro:boolean;
    email:string;
    user:object;
    Logar(email:string,password:string):Promise<void|string>
    Logout():void;
}

const AuthContext= createContext({} as AuthContextData);
export const AuthProvider=({children})=>{
    const [user,setUser]=useState<object|null>(null);
    const [loading,setLoading]=useState(true);
    const [erro,setErro]=useState(false);
    useEffect(()=>{
        async function loadStorageData(){
            const storagedUser=await AsyncStorage.getItem('@AppBlibio:user');
            
            if (storagedUser ){
                setUser(JSON.parse(storagedUser))
                setLoading(false);
            }
        }
        loadStorageData();
    },[]);

    async function Logar(email,password){
        try{
            const user=await firebase.auth()
            .signInWithEmailAndPassword(email,password);
            setUser(user)
            setErro(false)
            setLoading(false)
            await AsyncStorage.setItem('@AppBlibio:user', JSON.stringify(user))
            console.log(user.user.email)

        }catch(err){
            setErro(true)
         
        }
    }
    function Logout(){
        AsyncStorage.clear().then(()=>{
            setUser(null)
        })
    }
    if (loading && !!user){
        console.log(loading)
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#7FC8A9'}}>
                <ActivityIndicator color='#444941' size='large' />
                <Text style={{color:'#444941'}}> Carregando</Text>
            </View>
        );

    }
    return(
    <AuthContext.Provider value={{signed:!!user, email:'',user,Logar,Logout,erro}}>
        {children}
    </AuthContext.Provider> 
    );
};
export default AuthContext;