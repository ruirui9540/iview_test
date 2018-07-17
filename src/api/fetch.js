import axios from 'axios';
// import CryptoJS from 'crypto-js';

// 创建token
// const createToken = (url) => {
//     let utcSecond = parseInt(new Date().getTime() / 1000);
//     return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(`${utcSecond}*${url}`));
// };

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers.Authorization = 'JWT ' + localStorage.token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    undefined,
    error => {
        let res = error.response;
        switch (res.status) {
            case 401:
                window.alert('授权失败');
                break;
            case 403:
                window.alert('您没有该操作权限');
                break;
            case 500:
                window.alert('服务器错误');
        }
        return Promise.reject(error.response);
    }
);

export default axios;
