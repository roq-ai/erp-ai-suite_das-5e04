import axios from 'axios';
import queryString from 'query-string';
import { LandscapeInterface, LandscapeGetQueryInterface } from 'interfaces/landscape';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLandscapes = async (
  query?: LandscapeGetQueryInterface,
): Promise<PaginatedInterface<LandscapeInterface>> => {
  const response = await axios.get('/api/landscapes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLandscape = async (landscape: LandscapeInterface) => {
  const response = await axios.post('/api/landscapes', landscape);
  return response.data;
};

export const updateLandscapeById = async (id: string, landscape: LandscapeInterface) => {
  const response = await axios.put(`/api/landscapes/${id}`, landscape);
  return response.data;
};

export const getLandscapeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/landscapes/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLandscapeById = async (id: string) => {
  const response = await axios.delete(`/api/landscapes/${id}`);
  return response.data;
};
