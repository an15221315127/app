import {observable} from 'mobx';

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

}
const user = new User();

export default user;
