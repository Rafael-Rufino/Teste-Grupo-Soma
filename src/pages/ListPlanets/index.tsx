import { useState, useEffect } from "react";

import api from "../../services/api";

import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { IPlanets } from "./interface";

import { Container, CardList, Wrapper } from "./styles";

export const ListPlanets = () => {
  const [planets, setPlanets] = useState<IPlanets[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiResults, setApiResults] = useState<IPlanets[]>([]);

  const handleGenerateRandom = () => {
    const random = Math.floor(Math.random() * apiResults.length);
    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
    } = apiResults[random];
    const newPlanets = {
      name,
      rotation_period,
      orbital_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
    };
    setPlanets([newPlanets]);
  };

  useEffect(() => {
    async function AllPlanets() {
      try {
        const { data } = await api.get(`planets`);
        setApiResults(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    AllPlanets();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Wrapper>
        <Button onClick={handleGenerateRandom}>Generate random</Button>
      </Wrapper>
      <CardList>
        {planets.map((planets: IPlanets) => (
          <li key={planets?.name}>
            <strong>Name: {planets.name}</strong>
            <span>Rotation_period: {planets.rotation_period}</span>
            <span>Orbital_period: {planets.orbital_period}</span>
            <span>Diameter: {planets.diameter}</span>
            <span>Climate: {planets.climate}</span>
            <span>Gravity: {planets.gravity}</span>
            <span>Terrain: {planets.terrain}</span>
            <span>Surface_water: {planets.surface_water}</span>
            <span>Population: {planets.population}</span>
          </li>
        ))}
      </CardList>
    </Container>
  );
};
