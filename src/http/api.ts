import axios from "axios";


const api = axios.create({
  // todo: move this value to env variable
  baseURL: 'http://localhost:8000/',
  headers: {
    "Content-Type": "application/json",
  },

});

export const login = async (data: { email: string, password: string }) => {
  return api.post('/auth/users/login', data);
}
