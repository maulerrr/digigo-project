import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchUserId = async () => {
  const token = localStorage.getItem('token');
  console.log('Using token:', token); // Log token for debugging
  if (!token) {
      console.error('No token found in local storage');
      return null;
  }

  try {
      const response = await axiosInstance.get('/user/profile');
      console.log('Profile response:', response.data);
      return response.data.user.id;
  } catch (error) {
      console.error("Failed to fetch user profile:", error);
      return null;
  }
};


export default axiosInstance;
