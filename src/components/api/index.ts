import axios from 'axios';

export const API_URL = 'https://openmarket.weniv.co.kr/';

export const axiosIntestance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
