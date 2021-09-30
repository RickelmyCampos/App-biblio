import React from 'react';
import { View, Text,TextInput,Button,TouchableOpacity} from 'react-native';
import Estilos from '../Styles/Cadastro';
import {LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const PageBook = ({navigation}) => (
   
    <View style={Estilos.viewPrinc}>
        
        <View>
            <Text style={Estilos.TextNames}>Nome</Text>
            <TextInput style={Estilos.TextIn}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Autor</Text>
            <TextInput style={Estilos.TextIn}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Gênero</Text>
            <TextInput style={Estilos.TextIn}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Ano</Text>
            <TextInput style={Estilos.TextIn}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Sinopse</Text>
            <TextInput multiline style={Estilos.TextSin}/>
        </View> 
        <View style={Estilos.ViewBotoes}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View style={Estilos.Botao}>
        <Text style={Estilos.TextBotton}>Cancelar</Text>
        </View></TouchableOpacity>
        <TouchableOpacity><View style={Estilos.Botao}>
        <Text style={Estilos.TextBotton}>Salvar</Text>
        </View></TouchableOpacity>
</View>
    </View>
    


);



export default PageBook;