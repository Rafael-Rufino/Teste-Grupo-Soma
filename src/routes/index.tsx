import { Routes as Switch, Route } from "react-router-dom";

import { ListFilms } from "../pages/ListFilms";
import { ListPeople } from "../pages/ListPeople";
import { ListPlanets } from "../pages/ListPlanets";
import { ListSpecies } from "../pages/ListSpecies";
import { ListVehicles } from "../pages/ListVehicles";

const Routes = () => (
  <Switch>
    <Route path="/" element={<ListPeople />} />
    <Route path="/films" element={<ListFilms />} />
    <Route path="/planets" element={<ListPlanets />} />
    <Route path="/species" element={<ListSpecies />} />
    <Route path="/vehicles" element={<ListVehicles />} />
  </Switch>
);

export default Routes;
