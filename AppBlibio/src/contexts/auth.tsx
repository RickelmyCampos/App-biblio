import React, { createContext,useEffect,useState} from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-community/async-storage";
import firestore from '@react-native-firebase/firestore';


interface AuthContextData{
    signed:boolean;
    erro:boolean;
    uid:string;
    email:string;
    user:object;
    Logar(email:string,password:string):Promise<void|string>
    
}

const AuthContext= createContext({} as AuthContextData);
export const AuthProvider=({children})=>{
    const [user,setUser]=useState<object|null>(null);
    const [uid,setUid]=useState<string|null>(null);
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
    
    firestore()
        .collection('User')
        .doc(uid)
        .get()
        .then(documentSnapshot => {
            console.log('User exists: ', documentSnapshot.exists);

            if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            setUser(documentSnapshot.data())
            }
        });
    async function Logar(email,password){
        try{
            const user= await firebase().signInWithEmailAndPassword(email,password);
            setUid(user.user.uid)
            setErro(false)
            setLoading(false)
            await AsyncStorage.setItem('@AppBlibio:user', JSON.stringify(user))
            console.log(user.user.email)

        }catch(err){
            setErro(true)
         
        }
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
    <AuthContext.Provider value={{signed:!!user, email:'',user,Logar,erro,uid}}>
        {children}
    </AuthContext.Provider> 
    );
};
export default AuthContext;