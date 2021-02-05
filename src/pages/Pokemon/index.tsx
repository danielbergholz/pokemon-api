import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Container, Main, Info, Loading } from './styles';
import BackButton from '../../assets/back.png';
import LoadingIcon from '../../assets/loading.png';

interface RouteParam {
  pokemonName: string;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Type {
  type: {
    name: string;
  };
}

interface ApiResponse {
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  types: Type[];
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export default function Pokemon(): JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const { pokemonName } = useParams<RouteParam>();

  useEffect(() => {
    axios
      .get<ApiResponse>(baseUrl + pokemonName)
      .then((response) => setResponse(response.data));
  }, []);

  return (
    <Container>
      <Link to="/">
        <img src={BackButton} alt="Back button" />
      </Link>
      {!response ? (
        <Loading>
          <img src={LoadingIcon} alt="Loading Icon" />
        </Loading>
      ) : (
        <>
          <Main>
            <h1>{pokemonName}</h1>

            <img
              src={response.sprites.other['official-artwork'].front_default}
              alt={pokemonName + ' image'}
            />
          </Main>

          <Info>
            <h2>Weigth: {response.weight} lbs</h2>
            <h2>Heigth: {response.height} ft</h2>
          </Info>

          <Info>
            <h2>Base XP: {response.base_experience}</h2>
          </Info>

          <Info>
            <h2>Types: {iterate(response.types, 'type')}</h2>
          </Info>

          <Info>
            <h2>Stats: {iterate(response.stats, 'stat')}</h2>
          </Info>

          <Info>
            <h2>Abilities: {iterate(response.abilities, 'ability')}</h2>
          </Info>

          <Info>
            <h2>Moves: {iterate(response.moves, 'move')}</h2>
          </Info>
        </>
      )}
    </Container>
  );
}

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const iterate = (array: any[], key: string) => {
  const newArray = array.map((item, index) => {
    if (index + 1 === array.length) {
      return item[key].name;
    }
    return item[key].name + ', ';
  });

  return newArray;
};
