import axios from 'axios';
import queryString from 'query-string';
import { ConfigurationInterface, ConfigurationGetQueryInterface } from 'interfaces/configuration';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConfigurations = async (
  query?: ConfigurationGetQueryInterface,
): Promise<PaginatedInterface<ConfigurationInterface>> => {
  const response = await axios.get('/api/configurations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createConfiguration = async (configuration: ConfigurationInterface) => {
  const response = await axios.post('/api/configurations', configuration);
  return response.data;
};

export const updateConfigurationById = async (id: string, configuration: ConfigurationInterface) => {
  const response = await axios.put(`/api/configurations/${id}`, configuration);
  return response.data;
};

export const getConfigurationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/configurations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConfigurationById = async (id: string) => {
  const response = await axios.delete(`/api/configurations/${id}`);
  return response.data;
};
