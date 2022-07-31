import styled from "styled-components";
import theme from "../../styles/themes";

export const Container = styled.div``;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  list-style: none;
  line-height: 1.5;

  li {
    display: flex;
    flex-direction: column;
    background: ${theme.colors.heading};
    border-radius: 4px;
    padding: 20px;
    font-size: 1rem;
  }

  > strong {
    font-size: 1.125rem;
    line-height: 20px;
    color: ${theme.colors.black};
    margin-top: 5px;
  }
  span {
    font-size: 1rem;
    color: ${theme.colors.text};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
