import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 850px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  
`

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
