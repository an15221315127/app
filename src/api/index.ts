import {post,get} from "../util/XmlHttpRequest";


/**
 *
 * 登陆接口 login
 * @param data
 * @return 测试信息
 */
export const login = (data:object) => post('index/user/login_post', data);

