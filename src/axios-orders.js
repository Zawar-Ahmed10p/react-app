import axios from 'axios'

const instance = axios.create({
    baseURL:'https://url/'
});
export default instance;