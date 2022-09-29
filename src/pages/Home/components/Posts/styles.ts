import styled from "styled-components";

export const PostsContainer = styled.section`
  width: 100%;
  margin: 0 auto 3rem;
`;

export const SearchFormContainer = styled.form`
  width: 100%;
  margin-block: 4.5rem 3rem;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};

    &:focus {
      border-color: ${(props) => props.theme["blue"]};
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const SearchFormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

export const SearchFormHeaderTitle = styled.h4`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.125rem;
`;

export const SearchFormHeaderPublications = styled.p`
  color: ${(props) => props.theme["base-span"]};
  font-size: 0.875rem;
`

export const PostsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

