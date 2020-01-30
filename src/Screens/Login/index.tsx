import React,{Component} from "react";
import styles from "./style";
import {SafeAreaView,Text} from "react-native";
import { Input } from 'beeshell/dist/components/Input';
import { Form } from 'beeshell/dist/components/Form';
import { Button } from 'beeshell/dist/components/Button';
import { Tip } from 'beeshell/dist/components/Tip';
import {login} from "../../api";
var navigation: any;






class Login extends Component<any, any>{


    static navigationOptions = {
        title:'登陆',
        headerRight:()=>{
            return <Text onPress={()=>{navigation.navigate('Register',{title:'login'})}} style={styles.right}>注册</Text>
        },
        headerBackTitle:null,
    }
    constructor(props:any) {
        super(props);
        this.state = {
            form:{
                username:'',
                password:'',
            },
        }
        navigation = props.navigation;
    }


    private async inspect(){
        let {form} = this.state;
        for (let i in form){
            if(form[i] === ''){
                return Tip.show(i+'不能为空', 2000)
            }
        }

        await login(form).then((res:object | unknown)=>{
            console.log('postData获取到的参数=========',res)
            const {replace} = this.props.navigation;
            replace('Main',{title:'首页'})
        })





    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {username,password} = this.state.form;
        return <SafeAreaView style={styles.Screen}>
            <Text style={styles.title}>英雄联盟基友站</Text>
            <Form>
                <Form.Item label="用户名" hasLine>
                    <Input
                        value={username}
                        maxLength={25}
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        placeholder='请输入用户名'
                        onChange={(username) => {
                            let form = this.state.form;
                            form.username = username;
                            this.setState({
                                form
                            })
                        }}
                    />
                </Form.Item>
                <Form.Item label="密码" labelWidth={100} hasLine>
                    <Input value={password}
                           autoCapitalize={'none'}
                           secureTextEntry={true}
                           onChange={(password) => {
                               let form = this.state.form;
                               form.password = password;
                               this.setState({form})
                        }} />
                </Form.Item>
                <Button style={styles.button} type={'warning'} onPress={this.inspect.bind(this)}>登陆</Button>
            </Form>
            </SafeAreaView>

    }
}
export default Login;
