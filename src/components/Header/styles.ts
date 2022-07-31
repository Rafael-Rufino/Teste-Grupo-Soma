import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  align-items: center;
  margin: 50px 0;
  gap: 20rem;
`;

export const Title = styled.h1`
  color: ${theme.colors.green};
  font-size: 1.75rem;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
  }
  ul li {
    display: flex;
  }

  li a {
    color: ${theme.colors.heading};
    font-size: 1.125rem;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.green};
    }
  }
`;
