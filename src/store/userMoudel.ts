import {observable} from 'mobx';

/**
 *
 */
class User {
   @observable token = "1231413"
   @observable userInfo = {
       name:'安国栋',
       age:25,
       sex:"男"
   }

}
export const user = new User();
