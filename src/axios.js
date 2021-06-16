import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-react--clone-405b8.cloudfunctions.net/api'
    //'http://localhost:5001/react--clone-405b8/us-central1/api' //the API (cloud function) URL

});


export default instance;