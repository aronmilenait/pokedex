import { render } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';

test('renders PokemonCard', () => {
  const pokemon = {
    name: 'Vulpix',
    id: 37,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
  };

  const { container } = render(<PokemonCard pokemon={pokemon} />);
  expect(container).toMatchSnapshot();
});
