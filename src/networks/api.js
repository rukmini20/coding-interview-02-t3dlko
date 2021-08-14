import axios from 'axios';

const baseURL = 'https://reqres.in/api';
const users = '/users';

const api = axios.create({ baseURL });

export default api