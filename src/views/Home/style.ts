import {StyleSheet} from "react-native";
import px from "../../util/adaptation";

export const styles = StyleSheet.create({
    Screen:{
        height:'100%'
    },
    container: {
        height:px(400),
        width:px(750),
        position:'relative'
    },
    wrapper: {
        width: px(750),
        height:px(400),

    },

    paginationStyle: {
        bottom: 6,
    },
    dotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        opacity: 0.4,
        borderRadius: 0,
    },
    activeDotStyle: {
        width: 22,
        height: 3,
        backgroundColor: '#fff',
        borderRadius: 0,
    },
    list:{
        width:px(325),
    },
    one:{
        width:px(325),
        height:px(200),

    },
    tit:{
        fontSize:px(40),
        color:'#8B2500',
        textAlign:'center',
        marginTop:px(10),
    },
    List:{
        paddingRight:px(30),
        paddingLeft:px(30),
        justifyContent:'space-between',
        paddingTop:px(50),
    },
    tabList:{
        height:px(75),
        marginTop: px(20),
        paddingLeft: px(30),
        width:px(690),
        display:'flex',
        marginBottom:px(55),
        justifyContent: 'space-between',
    },
    tabOne:{
        width:px(138),
        textAlign: 'center'
    },
    item:{
        color: '#969696',
    },
    hero_tit:{
        fontSize: px(50),
        marginLeft:px(30),
    }

})



