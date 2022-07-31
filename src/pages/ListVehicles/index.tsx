import { useState, useEffect } from "react";

import api from "../../services/api";

import { FilterButton } from "../../components/FilterButton";
import { Loading } from "../../components/Loading";
import { IVehicles } from "./interface";

import { Container, CardList, Wrapper } from "./styles";

export const ListVehicles = () => {
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiResults, setApiResults] = useState<IVehicles[]>([]);

  const handleGenerateRandom = () => {
    const random = Math.floor(Math.random() * apiResults.length);
    const {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      vehicle_class,
      cargo_capacity,
      consumables,
      passengers,
    } = apiResults[random];
    const newVehicles = {
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      vehicle_class,
      cargo_capacity,
      consumables,
      passengers,
    };
    setVehicles([newVehicles]);
  };

  useEffect(() => {
    async function AllVehicles() {
      try {
        const { data } = await api.get(`vehicles`);
        setApiResults(data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    AllVehicles();
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
        {vehicles.map((vehicles: IVehicles) => (
          <li key={vehicles.name}>
            <strong>Name: {vehicles.name}</strong>
            <span>Model: {vehicles.model}</span>
            <span>Manufacturer: {vehicles.manufacturer}</span>
            <span>Cost_in_credits: {vehicles.cost_in_credits}</span>
            <span>Length: {vehicles.length}</span>
            <span>
              Max_atmosphering_speed: {vehicles.max_atmosphering_speed}
            </span>
            <span>Crew: {vehicles.crew}</span>
            <span>Passengers: {vehicles.passengers}</span>
            <span>Cargo_capacity: {vehicles.cargo_capacity}</span>
            <span>Consumables: {vehicles.consumables}</span>
            <span>Vehicle_class: {vehicles.vehicle_class}</span>
          </li>
        ))}
      </CardList>
    </Container>
  );
};
