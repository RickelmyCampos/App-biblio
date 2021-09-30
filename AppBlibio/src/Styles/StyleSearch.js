import {ScrollViewBase, StyleSheet,View,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
    HeaderSearch:{
       
        width:wp('13%'),
        height:hp('6%'),
        backgroundColor:'#fff',
        borderRadius:50,
        justifyContent:'center',
        opacity:1
    },
    HeaderSearchText:{
    
        width:wp('100%'),
        height:hp('7.5%'),
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:100,
        justifyContent:'center',
        opacity:1

    }

})