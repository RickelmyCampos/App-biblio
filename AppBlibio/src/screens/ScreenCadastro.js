import React ,{useState}from 'react';
import { View, Text,TextInput,Button,TouchableOpacity} from 'react-native';
import Estilos from '../Styles/Cadastro';
import {LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../services/api';
import { set } from 'react-native-reanimated';

function Salvar() {
    
}


function  Cadastro({navigation}){
    const text='';
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [ano, setAno] = useState(0);
    const [sinopse, setSinopse] = useState('');
    function handleNomeChange(name){setNome(name);}
    function handleAutorChange(autor){setAutor(autor);}
    function handleGeneroChange(genero){setGenero(genero);}
    function handleAnoChange(Ano){setAno(parseInt(Ano));}
    function handleSinopseChange(Sinopse){setSinopse(Sinopse);}
    function Salvar() {
        console.log({nome,autor,genero,ano,sinopse})
        api.post('/books', {
            NomeLivro: nome,
            Autor:autor,
            Ano:ano,
            Descrição:sinopse,
            Genero:genero
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          setNome('');
    setAutor('');
    setGenero('');
   setAno('');
    setSinopse('');
    alert('cadastrado!')
    
    }
    return(<View style={Estilos.viewPrinc}>
        
        <View>
            <Text style={Estilos.TextNames} >Nome</Text>
            <TextInput style={Estilos.TextIn} value={nome} onChangeText={handleNomeChange}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Autor</Text>
            <TextInput style={Estilos.TextIn} value={autor} onChangeText={handleAutorChange}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Gênero</Text>
            <TextInput style={Estilos.TextIn}value={genero} onChangeText={handleGeneroChange}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Ano</Text>
            <TextInput style={Estilos.TextIn} value={ano} keyboardType='numeric' onChangeText={handleAnoChange}/>
        </View>
        <View>
            <Text style={Estilos.TextNames}>Sinopse</Text>
            <TextInput multiline style={Estilos.TextSin} value={sinopse} onChangeText={handleSinopseChange}/>
        </View> 
        <View style={Estilos.ViewBotoes}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}><View style={Estilos.Botao}>
        <Text style={Estilos.TextBotton}>Cancelar</Text>
        </View></TouchableOpacity>
        <TouchableOpacity onPress={Salvar}><View style={Estilos.Botao}>
        <Text style={Estilos.TextBotton}>Salvar</Text>
        </View></TouchableOpacity>
</View>
    </View>);
}
   
    
    






export default Cadastro;