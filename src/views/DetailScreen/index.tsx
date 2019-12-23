import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";



class Detail extends React.Component<any, any>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <SafeAreaView>
            <ScrollView>
                <Text>你好，Detail</Text>
            </ScrollView>
        </SafeAreaView>
    }

}
export default Detail;
