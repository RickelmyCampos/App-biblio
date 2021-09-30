import { StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    booksStyle:{
        flex:1,
     
        alignItems:'center',
        backgroundColor:'white',
        width:wp('100%'),
        height:hp('100%')
         
    },
    supLabel:{
        width:wp('100%'), 
        backgroundColor:'white',
        
        height:hp('30%')
    },
    BoxBook:{
        flex:1,
        backgroundColor:'white',
        width:wp('80%'),
        marginTop:hp('1%'),
        marginBottom:hp('1%'),
        borderRadius:10,
        
    
    },
   
    infLabel:{
        width:wp('90%'),
        height:hp('57.5%'),
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        
    },
    TextPrinc:{
        fontSize:20,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        fontWeight:'bold',
        marginLeft:wp('17%')

      
    },
    Text_sec:{
        fontSize:15,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        marginBottom:'8%',
        marginLeft:wp('17%')
    },

    imageGenero:{
        width:100,height:100},
        textItem:{
        fontSize:20,
        fontFamily:'Rubik Light',
        color:'#000000',
        fontStyle: 'normal',
        textAlign:'center'},
    text_Desc2:{
        fontSize:25,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        padding:30,}
    
    });