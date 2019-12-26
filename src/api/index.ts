import api from "../../util/request";



export const login = (data:object) => api('user/login', data,'post');



export const HreoList = (data:object)=> api('/images/lol/act/img/js/heroList/hero_list.js',data,'get');
