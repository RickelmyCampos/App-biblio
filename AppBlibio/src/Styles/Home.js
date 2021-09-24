
import {ScrollViewBase, StyleSheet,View,} from 'react-native';
export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#fff',
    },
    View_Infe:{
        flex:1,
       
        flexDirection:'column',
        top:'20%',
        backgroundColor: '#FFFFFF',
        
        
    },
    menu:{
        width:40,
        height:40,
        resizeMode:'contain',
        marginVertical:25,
        marginHorizontal:10
    },
    text_Desc:{
        fontSize:20,
        fontFamily:'Rubik Light',
        color:'#FFFFFF',
        fontStyle: 'normal',
        textAlign:'right',
        width:'100%',
        height:'50%'
        
    
    },
    text_Desc2:{
        fontSize:25,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        padding:30,
        

    },
    text_Value:{
        fontSize:30,
        fontFamily:'Rubik Medium',
        color:'#FFFFFF',
        fontStyle: 'normal',
        textAlign:'right',
        width:'100%',
        height:'50%'
        
         
    },
    imageGenero:{
        width:100,height:100

    },
    ItemsGenero:{
        flex:1,
        padding:3,
        marginHorizontal:10,
        borderRadius:10
    },
    textItem:{
        fontSize:20,
        fontFamily:'Rubik Light',
        color:'#000000',
        fontStyle: 'normal',
        textAlign:'center'

    },
        
    });