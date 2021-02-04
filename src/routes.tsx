import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonId" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
