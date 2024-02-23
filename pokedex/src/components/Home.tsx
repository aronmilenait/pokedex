import HeaderImage from "../assets/vulpix.png";
const Home = () => {
  return (
    <section className="bg-gradient-to-b from-blue to-light-blue text-white p-8 text-center">
      <h1 className="text-6xl">Pokedex</h1>
      <p id="site-description" className="text-very-light-blue mt-8 p-4 text-bold text-2xl">All the pokemons, in one place</p>
      <img src={HeaderImage} alt="Vulpix" className="mt-4 w-48 mx-auto" />
    </section>
  );
};

export default Home;
