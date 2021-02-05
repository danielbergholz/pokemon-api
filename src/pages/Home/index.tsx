import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, MainTitle, Pokemon, Pagination, Loading } from './styles';
import PokemonLogo from '../../assets/pokemon.png';
import LoadingIcon from '../../assets/loading.png';

interface IPokemon {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}

export default function Home(): JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<ApiResponse>(baseUrl + '&offset=0').then((response) => {
      setResponse(response.data);
      setLoading(false);
    });
  }, []);

  const changePage = useCallback(
    async (type: 'next' | 'previous') => {
      if (!response || !response[type]) {
        return;
      }

      setLoading(true);

      const { data } = await axios.get<ApiResponse>(response[type] as string);

      setResponse(data);

      setLoading(false);
    },
    [response, setResponse, setLoading]
  );

  return (
    <Container>
      <MainTitle>
        <img src={PokemonLogo} alt="Pokemon logo" />
      </MainTitle>
      {!response || loading ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading Icon" />
        </Loading>
      ) : (
        <>
          {response.results.map((pokemon) => (
            <Pokemon key={pokemon.url}>
              <Link to={'/' + pokemon.name}>
                <h2>{pokemon.name}</h2>
              </Link>
            </Pokemon>
          ))}

          <Pagination isFirstPage={!response.previous}>
            <p onClick={() => changePage('previous')}>Previus | </p>
            <p onClick={() => changePage('next')}>Next</p>
          </Pagination>
        </>
      )}
    </Container>
  );
}

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
