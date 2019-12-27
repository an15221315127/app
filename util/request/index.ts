

// 请求地址
const BaseURL = 'https://www.anguodong.com/';
/**
 * @param url
 * @param data
 * @param method
 */
let api: (url: string, data: object, method: string) => Promise<unknown>;
api = (url: string, data: any, method: string) => {
    return new Promise((resolve, reject) => {
        // 实例化XMLHttpRequest对象;
        let request = new XMLHttpRequest();
        // 声明请求的URI地址
        let URI: string = BaseURL + url
        /**
         * get方式传参的一个拼接
         */
        if (method == "GET") {
            let str: string = '';
            for (let i in data) str += `${i}=${data[i]}&`;
            URI +='?' + str.substring(0,str.length-1);
        }
        // 请求回执监听
        request.onreadystatechange = (e: any) => {

            const state = request.readyState;
            //先看状态是否为4
            switch (state) {
                case 4:
                    // 状态为4再去看是否请求成功 200为成功 非200状态抛出错误
                    let status = request.status;
                    switch (status) {
                        case 200:
                            // 请求成功将接收到的字符串转成json格式返回给resolve回调函数。
                            let res = JSON.parse(request.responseText);
                            if (res.code && res.code == 1) resolve(res);
                            break;
                        default:
                            reject(request.responseText);
                    }

                    break;
                default:
                    return;
            }

        }
        // 打开连接通道
        request.open(method, URI);
        // 设置网络延时
        request.timeout = 10000;
        // 携带头部信息
        request.setRequestHeader("Content-Type",'application/json;charset=UTF-8');

        /**
         * 判断是否是get方式，如果是get这里的值需要为空
         */
        switch (method) {
            case 'GET':
                request.send(null);
                break;
            case 'POST':
                request.send(JSON.stringify(data));
        }
        /**
         * 如果请求超时失败在这里希望能设置重新弄请求
         * @param e
         */
        request.ontimeout = (e)=>{
            api(url,data,method);
        }
    })
};


export function get(url:string,data:object | {}) {
   return api(url,data,'GET');
}
export function post(url:string,data:object | {}) {
    return api(url,data,'POST');
}
