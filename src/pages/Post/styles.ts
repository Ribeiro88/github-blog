import styled from "styled-components";

export const PostContainer = styled.main`
  width: 100%;
  max-width: 850px;
  margin: 4rem auto;
  padding: 0 1.5rem;
`

export const PostHeader = styled.header`
  margin-top: -7rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PostHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    color: ${(props) => props.theme["blue"]};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    

    &:hover {
      text-decoration: underline;
    }

    & svg {
      margin-left: 0.5rem;
    }
  }
`;

export const PostHeaderTitle = styled.h1`
  font-size: 1.5rem;
`;

export const PostFooter = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }

`;

export const PostFooterInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["base-label"]};

  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

export const PostFooterInfoBoxText = styled.span`
  color: ${(props) => props.theme["base-span"]};
  font-size: 1rem;
`;

export const PostContent = styled.div`
  overflow: hidden;
  padding: 2.5rem 2rem;

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
  }

  a {
    font-size: 1rem;
    margin: 1rem 0 0 0;
    display: block;
    color: ${(props) => props.theme["blue"]};

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;