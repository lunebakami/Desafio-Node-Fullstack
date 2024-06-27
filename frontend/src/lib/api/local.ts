import { api } from ".";

type createLocalPayload = {
  address: string;
  cep: string;
  city: string;
  cnpj: string;
  complement?: string;
  email: string;
  localTypeId: number;
  name: string;
  nickname: string;
  phone: string;
  state: string;
  entries: string[];
  turnstiles: string[];
};

export const createLocal = async (data: createLocalPayload) => {
  return await api.post("/local", data);
};

export const getLocals = async ({ page = 1, quantity = 10 }:{ page?: number; quantity?: number }) => {
  return await api.get(`/local?page=${page}&quantity=${quantity}`);
}

export const getAllLocals = async () => {
  return await api.get(`/local`);
}

export const deleteLocal = async (id: string) => {
  return await api.delete(`/local/${id}`);
}
