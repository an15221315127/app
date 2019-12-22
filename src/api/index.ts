import api from "../../util/request";



const login = (data:object) => api('user/login','post',data);



export {
    login
}
