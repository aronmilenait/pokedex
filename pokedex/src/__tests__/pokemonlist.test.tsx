import { render, waitFor } from '@testing-library/react';
import PokemonList from '../components/PokemonList';
import { getPokemonList } from '../api/pokeapi';

jest.mock('../api/pokeapi');

describe('PokemonList component', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('renders PokemonList', async () => {
        const mockResponse = {
            results: [
                { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
                { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' }
            ],
            count: 3
        };

        (getPokemonList as jest.Mock).mockResolvedValue(mockResponse);

        const { container } = render(<PokemonList />);

        await waitFor(() => expect(getPokemonList).toHaveBeenCalledTimes(1));

        expect(container).toMatchSnapshot();
    });
});
