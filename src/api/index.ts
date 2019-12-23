import api from "../../util/request";



export const login = (data:object) => api('user/login','post',data);



