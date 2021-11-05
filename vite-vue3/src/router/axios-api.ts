import axios from 'axios';

/*
  API 이용에 앞서 필수 설정 및 공통화
 */
const instance = axios.create({
  baseURL: apiBaseURL(),
  timeout: 1000,
});

/**
 * api url 취득
 * @returns api url
 */
function apiBaseURL(): string | undefined {
  const url = import.meta.env.VITE_API_URL;
  if (typeof url === 'boolean') {
    return undefined;
  }
  return url;
}

// request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
