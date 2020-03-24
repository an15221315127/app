import {StyleSheet} from "react-native";
import px from "@/util/adaptation";
export const style = StyleSheet.create({
    Screen:{
        height:'100%',
        width:'100%'
    },
    header:{
        width:px(690),
        marginLeft: px(30),
        marginBottom: px(30),
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    container: {
        height:px(256),
        width:px(690),
        marginLeft:px(30),
        marginRight:px(30)
    },
    wrapper: {
        width:px(690),
        height:px(256),
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
    Electricity:{
        width:px(138),
        height:px(57),
        marginRight:px(66),
    },
    text:{
        fontSize:px(24),
        color:'#15172D',
        marginRight: px(46),
    },
    text2:{
        color:'#15172D',
        fontSize:px(30)
    },
    navView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:px(30)
    },
    nav:{
        width:px(335),
        height:px(150),
        marginTop:px(30),
        marginRight:px(20),
        paddingTop:px(26),
        paddingLeft: px(28)
    },
    nav_tit:{
        fontSize:px(34),
        color:'#FFFFFF'
    },
    nav_mess:{
        fontSize:px(24),
        color:'#FFFFFF',
        marginTop:px(10),
        width:px(429)
    },
    bottom:{
        width:px(690),
        height:px(150),
        marginLeft:px(30),
        marginTop: px(20),
        paddingTop: px(20),
        paddingLeft:px(28),
        paddingBottom:px(22),
        marginBottom: px(34),
    },
    line:{
        width:px(8),
        height:px(25),
        backgroundColor:'#15172C',
    },
    title:{
        fontSize:px(34),
        color:'#15172C',
        marginLeft:px(12),
    },
    td:{
        color:'#B1B0B0',
        fontSize:px(22),
    },
    longList:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:px(30)
    },
    border:{
        borderBottomWidth:px(2),
        borderBottomColor:'#E4E4E4',paddingBottom:px(17),paddingTop:px(15)
    },
    icon:{
        width:px(53),
        height:px(53),
        marginLeft:px(30),
        marginRight:px(28)
    },
    text1:{
        color:'#333333',fontSize:px(30)
    },
    small:{
        color:'#B1B0B0',fontSize:px(22)
    },
    item:{
        width:px(230),
    },
    btn:{
        width:px(186),
        height:px(68),
        textAlign:'center',
        lineHeight:px(68),
        fontSize:px(24),
        color:'#FFFFFF'
    },
    line1:{
      width:px(6),
      height:px(39),
      backgroundColor:'#59D134'
    },
    line2:{
        width:px(6),
        height:px(39),
        backgroundColor:'#F8C743'
    },
    line3:{
        width:px(6),
        height:px(39),
        backgroundColor:'#F84343'
    }
})

