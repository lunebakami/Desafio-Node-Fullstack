import { api } from ".";

type createEventPayload = {
  name: string;
  date: string; // Assuming ISO 8601 date format (YYYY-MM-DDTHH:mm:ss.sssZ)
  localId: string; // Can be more specific if you know the format (e.g., UUID)
  eventTypeId: number;
  email: string;
  phone: string;
};

export const createEvent = async (data: createEventPayload) => {
  return await api.post("/event", data);
};

export const getEvents = async ({
  page = 1,
  quantity = 10,
}: {
  page?: number;
  quantity?: number;
}) => {
  return await api.get(`/event?page=${page}&quantity=${quantity}`);
};

export const deleteEvent = async (id: string) => {
  return await api.delete(`/event/${id}`);
};
