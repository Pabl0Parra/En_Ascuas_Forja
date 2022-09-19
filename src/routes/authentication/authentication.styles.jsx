import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`;
