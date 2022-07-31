import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.heading};
  font-size: 1rem;
  padding: 4px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-weight: bold;
  border: 0;
  margin-right: 8px;
  &:hover {
    filter: brightness(0.9);
  }
`;
