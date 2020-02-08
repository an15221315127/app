import px from "../../util/size";
import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    scroll:{
        height:"100%",
    },
    header:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        flexDirection:'column',
    },
    text:{
        marginTop:px(10),
        padding:px(20)
    }
})


export default styles;
