import { StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({

    conteiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        padding: 20
        },
        View:{
            height:45,
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            borderWidth:1,
            borderRadius:10,
            borderColor:'#7FC8A9',
            color:'#444941',
            marginBottom:10,
            alignSelf:'stretch',
            
        },
        Inputs:{
            height:45,
            borderColor:'#7FC8A9',
            color:'#444941',
            marginBottom:10,
            alignSelf:'stretch'
    
        },
        Botao:{
            backgroundColor:'#7FC8A9',
            width:wp('30%'),
            height:hp('6%'),
            alignItems:'center',
            justifyContent:'center',
            borderRadius:100
        },
        BotaoDisabled:{
            backgroundColor:'grey',
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
    
}
    );