
import {ScrollViewBase, StyleSheet,View,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:'#D5EEBB',
        width:wp('100%')
    },
    View_Infe:{
        flex:1,
       
        flexDirection:'column',
        top:wp('20%'),
        backgroundColor: '#D5EEBB',
        
        
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
        color:'#444941',
        fontStyle: 'normal',
        
        textAlign:'right',
        height:hp('9%'),
    
    },
    text_Desc2:{
        fontSize:25,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        padding:30,
        fontWeight:'bold',
        color:'#5F7A61',
        

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
        color:'#444941',
        fontStyle: 'normal',
        textAlign:'center'

    },
    BoxBook:{
        flex:1,
        backgroundColor:'white',
        width:wp('80%'),
        marginTop:hp('1%'),
        marginBottom:hp('1%'),
        borderRadius:10,
        flexDirection:'row',
        borderBottomWidth:1.1,
        borderColor:'#444941'
       
        
    
    },
   
    infLabel:{
        width:wp('90%'),
        backgroundColor:'#fff',
        alignItems:'center',
        //bottom:hp('10%')

        
        
    },
    TextPrinc:{
        fontSize:20,
        fontFamily:'Rubik Medium',
        fontStyle: 'normal',
        fontWeight:'bold',
        marginTop:hp('1%'),
        marginLeft:wp('5%'),
        color:'#5F7A61'

      
    },
    Text_sec:{
        fontSize:15,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        marginBottom:'8%',
        marginLeft:wp('5%'),
        color:'#444941'
    },
        
    });