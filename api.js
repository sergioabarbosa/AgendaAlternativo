import axios from 'axios';

const apiAxios = axios.create({
  baseURL: 'https://portal-alternativo-backend.vercel.app/',
});

export default apiAxios;