import {StyleSheet} from "react-native";
import px from "@/util/adaptation";


const styles = StyleSheet.create({
    head:{
        width: px(750),
        height: px(418),
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems:'flex-end',
        paddingBottom:px(29)
    },
    small:{
      position:'absolute',
        width:px(29),
        height:px(13),
    },
    text:{
        fontSize:px(34),
        color:'#FFFFFF'
    },
    Screen:{
        height:"100%",
    },
    button:{
        marginTop: px(54),
        width:px(690),
        height:px(88),
        borderRadius:px(44),
        marginLeft:px(30),
        backgroundColor:'#120F1F'
    },
    item:{
        width:px(690),
        marginLeft:px(30),
        height:px(88),
        borderWidth:px(2),
        borderColor:'#120F1F',
        borderRadius: px(8),
        marginBottom:px(46)
    },
    icon:{
        width:px(35),
        height:px(42),
        // marginLeft: px(35),
        marginRight: px(35)
    },
    right:{
        marginRight:px(40),
    },
    code:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line:{
        width:px(2),
        height:px(31),
        backgroundColor:'#272727',
        marginRight:px(29)
    },
    form:{
        backgroundColor:"transparent",
        marginTop: px(70),
    },
    sign:{
        textAlign:'center',
        fontSize: px(25),
        marginTop:px(52)
    }

})


export default styles;
