import { useState, useEffect } from "react";

import api from "../../services/api";

import { FilterButton } from "../../components/FilterButton";
import { Loading } from "../../components/Loading";
import { ISpecies } from "./interface";

import { Container, CardList, Wrapper } from "./styles";

export const ListSpecies = () => {
  const [species, setSpecies] = useState<ISpecies[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiResults, setApiResults] = useState<ISpecies[]>([]);

  const handleGenerateRandom = () => {
    const random = Math.floor(Math.random() * apiResults.length);
    const {
      name,
      classification,
      designation,
      eye_colors,
      skin_colors,
      hair_colors,
      average_height,
      average_lifespan,
      homeworld,
      language,
    } = apiResults[random];
    const newSpecies = {
      name,
      classification,
      designation,
      eye_colors,
      skin_colors,
      hair_colors,
      average_height,
      average_lifespan,
      homeworld,
      language,
    };
    setSpecies([newSpecies]);
  };

  useEffect(() => {
    async function AllSpecies() {
      try {
        const { data } = await api.get(`species`);
        setApiResults(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    AllSpecies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Wrapper>
        <FilterButton onClick={handleGenerateRandom}>
          Generate random
        </FilterButton>
      </Wrapper>
      <CardList>
        {species.map((species: ISpecies) => (
          <li key={species?.name}>
            <strong>Name: {species.name}</strong>
            <span>Classification: {species.classification}</span>
            <span>Designation: {species.designation}</span>
            <span>Average_height: {species.average_height}</span>
            <span>Skin_colors:{species.skin_colors}</span>
            <span>Hair_colors: {species.hair_colors}</span>
            <span>Eye_colors: {species.eye_colors}</span>
            <span>Average_lifespan: {species.average_lifespan}</span>
            <span>Homeworld: {species.homeworld}</span>
            <span>Language: {species.language}</span>
          </li>
        ))}
      </CardList>
    </Container>
  );
};
