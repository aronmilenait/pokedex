import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemonList = async (limit: number, offset: number) => {
  try {
    const response = await pokeApi.get(
      `/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonDetails = async (id: number) => {
  try {
    const response = await pokeApi.get(`/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default pokeApi;
