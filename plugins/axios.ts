import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const baseURL = `${config.public.API_BASE_URL}`;

  const api: AxiosInstance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use((requestConfig) => {
    if (typeof window !== 'undefined') {
      const token = useCookie<string | null>('token').value;
      if (token) {
        requestConfig.headers.Authorization = `Bearer ${token}`;
      }
    }
    return requestConfig;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (!error.response) return Promise.reject(new Error('Network error'));

      const { status } = error.response;

      if (status === 401 || status === 403) {
        console.error('Session has ended, Please login again');
      }

      const errorMessage = `Error ${error.message}`;

      return Promise.reject(new Error(errorMessage));
    },
  );

  nuxtApp.provide('axios', axios);
  nuxtApp.provide('api', api);
});
