import React from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";




class User extends React.Component<any, any>{



    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <SafeAreaView>
            <ScrollView>
                <Text>你好，这里是User组件</Text>
            </ScrollView>
        </SafeAreaView>
    }

}


export default User;
