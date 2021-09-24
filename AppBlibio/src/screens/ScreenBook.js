import React from 'react';
import { View, Text,Image} from 'react-native';
import Estilos from '../Styles/Book';
import {LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PageBook = ({navigation}) => (
  <View>
         <ScrollView>
         <View style={Estilos.Label_sup}>
            <Image
            source={require('../assets/images/Generico.png')}//
            resizeMode='cover'
            style={Estilos.imageGenero}
            />
            <View style={Estilos.view2}>
                <Text style={Estilos.Text_top}>Nome do Livro</Text>
                <Text>Autor</Text>
                <Text>Ano</Text>
                <Text>Gênero</Text>
                <View style={{flex:1,flexDirection:'row',width:'100%',height:80}}>
                    <Image
                    source={require('../assets/images/Generico.png')}//
                    resizeMode='cover'
                    style={Estilos.imagemenor}
                    />
                    <Image
                    source={require('../assets/images/Generico.png')}//
                    resizeMode='cover'
                    style={Estilos.imagemenor}
                    />
                    <Image
                    source={require('../assets/images/Generico.png')}//
                    resizeMode='cover'
                    style={Estilos.imagemenor}
                    />
                </View>
            </View>
        </View>
        <View style={Estilos.Label_inf}>
        <Text style={Estilos.Text_princ}>Descrição</Text>
        <Text style={Estilos.Text_sec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris eget lorem ullamcorper, finibus tristique velit posuere. Duis vitae congue nisl, vitae rhoncus lectus. Suspendisse ut tempus nisi. Mauris facilisis porta vulputate. Donec consequat lectus non neque mollis pharetra. Donec vitae bibendum nisi. In egestas, sem et faucibus interdum, leo lectus volutpat libero, vitae auctor odio enim at dolor. Suspendisse sit amet enim sed tellus vehicula blandit.</Text>
        <Text style={Estilos.Text_princ}>Minhas Notas</Text>
        <Text style={Estilos.Text_sec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mauris eget lorem ullamcorper, finibus tristique velit posuere. Duis vitae congue nisl, vitae rhoncus lectus. Suspendisse ut tempus nisi. Mauris facilisis porta vulputate. Donec consequat lectus non neque mollis pharetra. Donec vitae bibendum nisi. In egestas, sem et faucibus interdum, leo lectus volutpat libero, vitae auctor odio enim at dolor. Suspendisse sit amet enim sed tellus vehicula blandit.</Text>

        </View>
        
         </ScrollView>
     </View>
);



export default PageBook;