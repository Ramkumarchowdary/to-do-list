import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';



const axiosInstance = axios.create();


axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {

  config.headers[] = ;
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response: AxiosResponse) => {

  console.log('Response:', response.data);
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
