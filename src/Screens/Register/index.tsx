import React,{Component} from "react";
import styles from "./style";
import {SafeAreaView,Text} from "react-native";
import { Input } from 'beeshell/dist/components/Input';
import { Form } from 'beeshell/dist/components/Form';
import { Button } from 'beeshell/dist/components/Button';
import { Tip } from 'beeshell/dist/components/Tip';
import {login} from "../../api";


class Register extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            form:{
                username:'',
                phone:'',
                password:'',
            },
            repassword:'',
        }
    }
    static navigationOptions = {
        title:'注册'
    }

    private inspect(){
        let {password} = this.state.form;
        let {repassword} = this.state;
        let {form} = this.state;
        for (let i in form){
            if(form[i] === ''){
                return Tip.show(i+'不能为空', 2000)
            }
        }
        if(password !== repassword){
            return Tip.show('两次输入的密码不对', 2000)
        }

        login(form).then((res:any)=>{

            if(0 === res.code){
                const {navigate} = this.props.navigation;
                navigate('Main')
            }
        })
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {username,password,phone} = this.state.form;
        const {repassword} = this.state;
        return <SafeAreaView style={styles.Screen}>
            <Text style={styles.title}>不亦悦乎</Text>
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
                <Form.Item label="手机号" labelWidth={100} hasLine>
                    <Input value={phone}
                           autoCapitalize={'none'}
                           onChange={
                               (phone) => {
                                   let form = this.state.form;
                                   form.phone = phone;
                                   this.setState({form})
                               }} />
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
                <Form.Item label="确认密码" labelWidth={100} hasLine>
                    <Input value={repassword}
                           autoCapitalize={'none'}
                           secureTextEntry={true}
                           onChange={(repassword) => {
                               this.setState({repassword})
                           }} />
                </Form.Item>
                <Button style={styles.button} type={'warning'} onPress={this.inspect.bind(this)}>注册</Button>
            </Form>
        </SafeAreaView>

    }
}
export default Register;
