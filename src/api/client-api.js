import axios from 'axios';
import {createError} from './utils';
const request = axios.create({
    baseURL: 'http://61.190.254.58:8080/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Authorization': 'JWT ' + localStorage.token
    }
});
// 拦截器
request.interceptors.request.use(
    config => {
        config.headers.Authorization = 'JWT ' + localStorage.token;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

const handleRequest = (request) => {
    return new Promise((resolve, reject) => {
        request.then(response => {
            if (!response.data) {
                return reject(createError(400, 'no data'));
            }
            resolve(response);
        }).catch(error => {
            const response = error.response;
            reject(response);
        });
    });
};

export default {
    // 获取组织结构信息
    getSiteInfo (params) {
        return handleRequest(request.get('api/user/obunion-trees' + params, params));
    },

    // 获取博主信息
    getBloggerInfo (params) {
        return handleRequest(request.get('api/qask/info/mes/'));
    },

    // 豆瓣API
    getDoubanInfo (params) {
        if ('type' in params && 'id' in params) {
            return handleRequest(request.get(`/api/${params.type}/${params.id}/`, params));
        }
    }
};
