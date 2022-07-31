import { Link } from "react-router-dom";

import { Container, Title, Nav } from "./styles";

export default function Header() {
  return (
    <Container>
      <Title>List Api</Title>
      <Nav>
        <ul>
          <li>
            <Link to="/">People</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
