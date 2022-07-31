import { NavLink } from "react-router-dom";

import { Container, Title, Nav } from "./styles";

export default function Header() {
  return (
    <Container>
      <Title>List Api</Title>
      <Nav>
        <NavLink to="/">People</NavLink>

        <NavLink to="/films">Films</NavLink>

        <NavLink to="/planets">Planets</NavLink>

        <NavLink to="/species">Species</NavLink>

        <NavLink to="/vehicles">Vehicles</NavLink>
      </Nav>
    </Container>
  );
}
