import axios from 'axios';

const baseURL = 'https://reqres.in/api';
export const users = '/users';

const api = axios.create({ baseURL });

export default api