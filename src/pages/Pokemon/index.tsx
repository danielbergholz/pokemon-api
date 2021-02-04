import { useParams } from 'react-router-dom';

interface RouteParam {
  pokemonId: string;
}

export default function Pokemon(): JSX.Element {
  const { pokemonId } = useParams<RouteParam>();

  return <h1>Pokemon ID: {pokemonId}</h1>;
}
