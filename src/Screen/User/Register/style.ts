import {StyleSheet} from "react-native";
import px from "../../../util/adaptation";


const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:px(418)
    },
    Screen:{
        height:"100%",
        width:'100%',
        display: 'flex',
    },
    button:{
        marginTop: px(150),
        width:px(600),
        borderRadius:px(20),
        marginLeft:px(75)
    }

})


export default styles;
