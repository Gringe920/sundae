import httpRequest from './http.request'

const services = {
    getBookList (){
        return httpRequest.get({
            url: 'https://api.apiopen.top/getJoke?page=1&count=2&type=video'
        })
    }
}
export default services;