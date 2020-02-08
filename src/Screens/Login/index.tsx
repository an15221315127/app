import React,{Component} from "react";
import styles from "./style";
import { SafeAreaView, Text,AsyncStorage} from 'react-native';
import { Input } from 'beeshell/dist/components/Input';
import { Form } from 'beeshell/dist/components/Form';
import { Tip } from 'beeshell/dist/components/Tip';
import {Button} from 'beeshell/dist/components/Button';
import {login} from "../../api";
import {inject,observer} from 'mobx-react';
var navigate: any;
import {setItem,getItem} from '../../util/stroage';


@inject('user')
@observer // 使你这个类具有可观察性
class Login extends Component<any, any>{


    static navigationOptions = {
        title:'登陆',
        headerRight:()=>{
            return <Text onPress={()=>{navigate('Register',{title:'login'})}} style={styles.right}>注册</Text>
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
            time:'2016-03-30'
        }
        navigate = props.navigation.navigate;

    }


    private  inspect(){
        let {form} = this.state;
        for (let i in form){
            if(form[i] === ''){
                return Tip.show(i+'不能为空', 2000)
            }
        }

         login(form).then((res:any)=>{
             const {code,data,msg}:any = res;
             if(code === 1){
                 Tip.show(msg, 1500)
                 setItem('user',data);
                 setTimeout(async ()=>{
                     const user = await getItem('user');
                     if (typeof user === 'string') {
                         console.log( JSON.parse(user));
                     }
                 },0)
                setTimeout(()=>{
                    const {replace} = this.props.navigation;
                    this.props.user.setUser(data);
                    replace('Main',{title:'首页'})
                },1500)
             }

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
                <Button  style={styles.button} type={'primary'} onPress={this.inspect.bind(this)}>登陆</Button>
            </Form>
            </SafeAreaView>

    }
}
export default Login;
