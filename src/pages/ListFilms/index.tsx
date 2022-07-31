import { useState, useEffect } from "react";

import api from "../../services/api";

import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { IFilms } from "./interface";

import { Container, CardList, Wrapper } from "./styles";

export const ListFilms = () => {
  const [films, setFilms] = useState<IFilms[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiResults, setApiResults] = useState<IFilms[]>([]);

  const handleGenerateRandom = () => {
    const random = Math.floor(Math.random() * apiResults.length);
    const {
      episode_id,
      director,
      producer,
      release_date,
      title,
      opening_crawl,
    } = apiResults[random];
    const newFilms = {
      episode_id,
      director,
      producer,
      release_date,
      title,
      opening_crawl,
    };
    setFilms([newFilms]);
  };

  useEffect(() => {
    async function AllFilms() {
      try {
        const { data } = await api.get(`films`);
        setApiResults(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    AllFilms();
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
        {films.map((films: IFilms) => (
          <li key={films?.episode_id}>
            <strong>Titulo: {films.title}</strong>
            <span>Id: {films.episode_id}</span>
            {/* <span>Opening_crawl: {films.opening_crawl}</span> */}
            <span>Producer: {films.producer}</span>
            <span>Date: {films.release_date}</span>
          </li>
        ))}
      </CardList>
    </Container>
  );
};
