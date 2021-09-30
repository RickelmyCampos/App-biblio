
import {ScrollViewBase, StyleSheet,View,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#fff',
        width:wp('100%')
    },
    View_Infe:{
        flex:1,
       
        flexDirection:'column',
        top:wp('20%'),
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
        height:hp('9%'),
    
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
        height:hp('50%'),
        textAlign:'right',
        
      
        
        
         
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