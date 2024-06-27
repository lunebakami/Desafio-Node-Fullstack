import axios from "axios";

export const getStates = async () => {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  return await axios.get(url);
};
