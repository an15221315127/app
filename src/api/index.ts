import {post,get} from "../../util/request";


/**
 *
 * 登陆接口 login
 * @param data
 * @return 测试信息
 */
export const login = (data:object) => post('index/user/login_post', data);

/**
 *
 * 登陆接口 login_get
 * @param data
 * @return 测试信息
 */

export const login_get = (data:object) => get('index/user/login_get', data);
