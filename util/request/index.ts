

const BaseURL = 'https://www.anguodong.com/miniapp/';
/**
 * 封装XMLHttpRequest对象作为网络请求·
 * @param url
 * @param method
 * @param data
 */
const api = (url:string,method:string,data:object)=>{
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            url = BaseURL + url;
            request.onreadystatechange = (e:any) =>{
                if(request.readyState != 4 ){
                    return;
                }
                if(request.status === 200){
                    const res = request.responseText;
                    resolve(JSON.parse(res));
                }else{
                    reject(request.responseText);
                }
            }
            request.open(method,url);
            request.send(data);
        })
}
export default api;
