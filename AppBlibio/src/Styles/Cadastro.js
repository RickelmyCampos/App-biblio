import { StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    flex:1,
    viewPrinc:{width:wp('100%'),
    height:hp('90%'),
    backgroundColor:'white',
    padding:hp('5%')
    },
    TextIn:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#7FC8A9',
        color:'#444941'

    },
    TextNames:{
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        color:'#5F7A61'
    },
    TextSin:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#17B77D',
        height:hp('20%'),
        color:'black',
        

    },
    ViewBotoes:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        height:hp('10%'),
        

    },
    Botao:{
        backgroundColor:'#7FC8A9',
        width:wp('30%'),
        height:hp('6%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100
    },
    TextBotton:{
        fontSize:20,
        fontFamily:'Rubik Light',
        fontStyle: 'normal',
        color:'white',
        fontWeight:'bold'
    }

    
    });