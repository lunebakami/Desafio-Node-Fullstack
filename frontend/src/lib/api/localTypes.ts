import { api } from ".";

export const getLocalTypes = async () => {
  return await api.get('/local-type');
}
