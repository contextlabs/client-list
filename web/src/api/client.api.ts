import { Client } from '../types/client.types';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { DEFAULT_AXIOS_CONFIG } from '../constants';

export const PATHS = Object.freeze({
  CLIENT_DATA: () => '/clients'
});

const BASE_URL = 'http://localhost:5000';

const CONFIG: AxiosRequestConfig = {
  ...DEFAULT_AXIOS_CONFIG,
  baseURL: BASE_URL
};

export const getClients = (): Promise<AxiosResponse<Client[]>> => {
  return axios.get<Client[]>(PATHS.CLIENT_DATA(), CONFIG);
};

export const getClientByName = (
  name: string
): Promise<AxiosResponse<Client[]>> => {
  const params = { name };
  return axios.get<Client[]>(PATHS.CLIENT_DATA(), { ...CONFIG, params });
};

export const getClientByFilter = (
  q: string
): Promise<AxiosResponse<Client[]>> => {
  const params = { q };
  return axios.get<Client[]>(PATHS.CLIENT_DATA(), { ...CONFIG, params });
};
