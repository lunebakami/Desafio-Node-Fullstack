
import { api } from ".";

export const getEventTypes = async () => {
  return await api.get('/event-type');
}
