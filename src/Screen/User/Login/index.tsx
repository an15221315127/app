import React,{Component} from "react";
import styles from "./style";
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import { Input,Form,Tip ,Button} from 'beeshell';
import px from "@/util/adaptation";
import {EmailCode,Login as login} from "@/api";
import {emailCheck} from "@/util/util";
import {inject,observer} from 'mobx-react';
@inject('user')
@observer // 使你这个类具有可观察性
class Login extends Component<any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            account:'',// 用户名
            password:'',// 密码
            key:false, // 登陆方式切换
            timer:null,// 定时器宿主
            time:60,
        }
    }
    // 倒计时
    protected Time(){
        let {timer} = this.state;
        timer = setInterval(()=>{
            let {time} = this.state;
            this.setState({
                time:time--
            })
            if(time <=0){
                this.setState({
                    time:0
                })
                clearInterval(timer);
            }
        },1000)
    }
    //发送验证码
    protected sendCode(){
        const {account,time}:any = this.state;
        if(account != '' && time == 60  && emailCheck(account)){
            this.Time();
            EmailCode({
                email:account //邮箱
            }).then(res=>{
                const {code,msg}:any = res;
                if(code === 0){
                    Tip.show(msg)
                    this.setState({
                        time:0
                    })
                }
            })
        }else {
            Tip.show("邮箱不对哦！")
        }


    }
    // 提交信息
    submit(){
        console.log(this.state)
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {account,password,time} = this.state;
        const {key} = this.state;
        const {navigate} = this.props.navigation
        const tab = key ? {left:px(169)}:{right:px(169)}

        return  <ScrollView style={styles.Screen}>
                <ImageBackground style={styles.head} source={require('@/assets/images/login/login_back.png')}>
                    <Text onPress={()=>{
                        this.setState({
                            key:true
                        })
                    }} style={styles.text}>Mailbox login</Text>
                    <Text onPress={()=>{
                        this.setState({
                            key:false
                        })
                    }} style={styles.text}>Password login</Text>
                    <Image source={require('@/assets/images/login/sanjiao.png')} style={{...styles.small,...tab}}></Image>
                </ImageBackground>
            <Form style={styles.form}>
                <Form.Item
                    label={
                        <Image style={styles.icon} source={require('@/assets/images/login/shouji.png')}/>
                    }
                    style={styles.item}
                    labelWidth={20}
                 hasLine>
                    <Input

                        value={account}
                        maxLength={25}
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        placeholder='请输入用户名'
                        onChange={(account) => {
                            this.setState({
                                account
                            })
                        }}
                    />
                </Form.Item>

                <Form.Item
                    label={
                    <Image style={styles.icon} source={require('@/assets/images/login/anquan.png')} />
                }
                    style={styles.item}
                    hasLine>
                    <View style={styles.code}>
                        <Input value={password}
                               style={{flex:1}}
                               autoCapitalize={'none'}
                               secureTextEntry={true}
                               onChange={(password) => {
                                   this.setState({password})
                               }} />
                               <View style={styles.line}/>
                        <Text onPress={()=>{
                            this.sendCode()
                        }
                        }>{time == 60 ? "get code" :time}</Text>
                    </View>

                </Form.Item>
                <Button  style={styles.button} type={'primary'} onPress={()=>{
                    this.submit()
                }}>Login</Button>
                <Text onPress={()=>{
                    navigate("Register")
                }
                } style={styles.sign}>sign up</Text>
            </Form>
                </ScrollView>

    }
}
export default Login;

