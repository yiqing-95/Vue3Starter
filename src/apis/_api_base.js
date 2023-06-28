import axios from 'axios';

// @see https://www.twilio.com/blog/build-single-page-application-in-php-yii-2-0-vue-js
// https://github.com/yemiwebby/vue-yii-app

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default {
    helpGet: url => axiosClient.get(url).then(res => res.data),
    helpPost: (url, data) => axiosClient.post(url, data).then(res => res.data),
    helpPatch: (url, data) => axiosClient.patch(url, data).then(res => res.data),
    helpDelete: (url) => axiosClient.delete(url)
}
