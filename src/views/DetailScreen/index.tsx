import React from "react";
import { ImageBackground, SafeAreaView, ScrollView } from "react-native";


/**
 * 详情
 */
class Detail extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        const {params} = props.navigation.state
        this.state ={
            url:params.url
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {url} = this.state;
        return <SafeAreaView>
            <ScrollView>
                <ImageBackground style={{width:'100%',height:260}} source={url}/>
            </ScrollView>
        </SafeAreaView>
    }

}
export default Detail;
