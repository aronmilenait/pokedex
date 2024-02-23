import { useEffect, useState } from "react";
import { getPokemonList } from "../api/pokeapi";
import PokemonCard from "./PokemonCard";

interface Pokemon {
  name: string;
  id: number;
  image: string;
}

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await getPokemonList(
          pageSize,
          (currentPage - 1) * pageSize
        );
        setPokemonList(response.results);

        setTotalPages(Math.ceil(response.count / pageSize));

        const pokemonDetails = response.results.map(
          (pokemon: { name: string; url: string }) => {
            const id = parseInt(pokemon.url.split("/")[6]);
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return {
              name: pokemon.name,
              id: id,
              image: imageUrl,
            };
          }
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div
        id="pagination"
        className="flex justify-center items-center p-5 bg-very-light-blue"
      >
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-blue hover:bg-dark-blue text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
        >
          Previous
        </button>
        <p className="mr-2 bg-blue text-white font-bold py-2 px-4 rounded">
          Page {currentPage}
        </p>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue hover:bg-dark-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
      <section
        id="pokemon-list"
        className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-very-light-blue p-10"
      >
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
};

export default PokemonList;
