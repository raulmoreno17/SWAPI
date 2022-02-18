import Home from "./Components/Pages/Home";
import CharacterDetail from "./Components/Pages/CharacterDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/character/:characterId" exact>
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
