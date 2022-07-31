import { useState, useEffect } from "react";

import api from "../../services/api";

import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { IPeople } from "./interface";

import { Container, CardList, Wrapper } from "./styles";

export const ListPeople = () => {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiResults, setApiResults] = useState<IPeople[]>([]);

  const handleGenerateRandom = () => {
    const random = Math.floor(Math.random() * apiResults.length);
    const { name, height, mass, hair_color, skin_color } = apiResults[random];
    const newPeople = { name, height, mass, hair_color, skin_color };
    setPeople([newPeople]);
  };

  useEffect(() => {
    async function AllPeoples() {
      try {
        const { data } = await api.get(`people`);
        setApiResults(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    AllPeoples();
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
        {people.map((person: IPeople) => (
          <li key={person?.name}>
            <strong>Name: {person.name}</strong>
            <span>Height: {person.height}</span>
            <span>Mass: {person.mass}</span>
            <span>Hair_color: {person.hair_color}</span>
            <span>Skin_color: {person.skin_color}</span>
          </li>
        ))}
      </CardList>
    </Container>
  );
};
