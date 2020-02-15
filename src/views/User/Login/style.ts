import {StyleSheet} from "react-native";
import px from "@/util/adaptation";


const styles = StyleSheet.create({
    Screen:{
        height:"100%",
        width:'100%',
        display: 'flex',
    },
    title:{
        textAlign:'center',
        fontSize:px(50),
        marginTop:px(130),
        marginBottom:px(100),
        color:'#CD853F',
    },
    button:{
        marginTop: px(250),
        width:px(600),
        borderRadius:px(20),
        marginLeft:px(75)
    },
    right:{
        marginRight:px(40),
    }

})


export default styles;
