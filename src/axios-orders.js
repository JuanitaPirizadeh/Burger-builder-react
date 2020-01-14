import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://react-my-burger-cb18a.firebaseio.com/'
});

export default instance; 