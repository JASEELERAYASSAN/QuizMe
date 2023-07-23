import axios from 'axios'
const baseURL = 'https://opentdb.com/api.php'

const api = axios.create({
    method: 'Get',
    baseURL: baseURL,
    responseType: 'json',
headers:{
    "Content-Type": 'application/json'
}
})
export default api;

// https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986
