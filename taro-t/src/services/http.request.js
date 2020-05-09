import Taro from '@tarojs/taro';

/**
 * 
 * @param {*} chain 
 */
// const interceptor = function (chain) {
//         const requestParams = chain.requestParams;
//         requestParams.header = { ...requestParams.header, token: 'your token'}
//         return chain.proceed(requestParams)
//         .then(res => {
//             console.log(`http <-- ${url} result:`, res)
//             return res
//         })
// }
// Taro.addInterceptor(interceptor)

export default {
    /**
     * 
     * @param {url:string, data:json, header:json} option 
     * @param {*} method 
     */
    request(option, method = "GET"){
        return Taro.request({
            ...option,
            method,
            header: {
                'content-type': 'application/json',
                ...option.header
            }
        })
    },
    get(option){
        return this.request(option, 'GET')
    }
}