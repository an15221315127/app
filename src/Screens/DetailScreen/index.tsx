import React from "react";
import { ImageBackground, SafeAreaView, ScrollView ,Text} from "react-native";
import styles from "./style";
import { Rate ,Dialog,Button} from 'beeshell'

/**
 * 详情
 */
class Detail extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        const {url,tit} = props.navigation.state.params;
        this.state ={
            url,
            tit,
            rate:1,
        }
    }
    private _dialog:any;
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {url,tit,rate} = this.state;
        return <SafeAreaView>
            <ScrollView style={styles.scroll}>
                <ImageBackground style={{width:'100%',height:260}} source={url}/>
                <Text style={styles.head_tit}>{tit}</Text>
                {/*<Rate*/}
                {/*    total={5}*/}
                {/*    value={rate}*/}
                {/*    iconSize={20}*/}
                {/*    iconSpace={20}*/}
                {/*    onChange={(rate:number) => {*/}
                {/*       this.setState({*/}
                {/*           rate*/}
                {/*       })*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<Dialog*/}
                {/*    ref={(c) => {*/}
                {/*        this._dialog = c*/}
                {/*    }}*/}
                {/*    cancelable={true}*/}
                {/*    title='系统提示'*/}
                {/*    bodyText='确认删除该信息？'*/}
                {/*    cancelCallback={() => {*/}
                {/*        console.log('cancel')*/}
                {/*    }}*/}
                {/*    confirmCallback={() => {*/}
                {/*        this._dialog.close();*/}
                {/*    }}*/}
                {/*/>*/}

                {/*<Button type={'success'} onPress={()=>{*/}
                {/*    this._dialog.open()*/}
                {/*}*/}
                {/*}>确认</Button>*/}



            </ScrollView>
        </SafeAreaView>
    }

}
export default Detail;
