import axios from 'axios';
import queryString from 'query-string';
import { DataPrivacyInterface, DataPrivacyGetQueryInterface } from 'interfaces/data-privacy';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDataPrivacies = async (
  query?: DataPrivacyGetQueryInterface,
): Promise<PaginatedInterface<DataPrivacyInterface>> => {
  const response = await axios.get('/api/data-privacies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDataPrivacy = async (dataPrivacy: DataPrivacyInterface) => {
  const response = await axios.post('/api/data-privacies', dataPrivacy);
  return response.data;
};

export const updateDataPrivacyById = async (id: string, dataPrivacy: DataPrivacyInterface) => {
  const response = await axios.put(`/api/data-privacies/${id}`, dataPrivacy);
  return response.data;
};

export const getDataPrivacyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/data-privacies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDataPrivacyById = async (id: string) => {
  const response = await axios.delete(`/api/data-privacies/${id}`);
  return response.data;
};
