import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
