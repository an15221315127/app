import {observable, computed, action} from 'mobx';

/**
 * 创建user类放置与用户信息有管的一切数据
 */
class User {
   @observable token = "1231413"
   @observable userInfo = {
       name:'安国栋',
       age:25,
       sex:"男"
   }
  @computed get message() {
    return "名字:"+this.userInfo.name + "年龄:"+this.userInfo.age +"性别:"+this.userInfo.sex;
  }
  @action
  setUser(userInfo:any){
     this.userInfo = userInfo;
  }
}
const user = new User();

export default user;
