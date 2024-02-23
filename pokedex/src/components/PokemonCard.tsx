interface PokemonCardProps {
  pokemon: {
    name: string;
    id: number;
    image: string;
  };
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {

  return (
    <div className="bg-light-blue p-4 text-center shadow-md">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 mx-auto mb-4 hover:scale-125 transition-transform duration-200 ease-in-out"
      />
      <p className="text-lg font-bold text-white text-shadow">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
