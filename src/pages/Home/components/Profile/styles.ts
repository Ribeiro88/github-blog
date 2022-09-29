import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 3rem;
  margin-bottom: 3rem;

  background-color: ${(props) => props.theme["base-profile"]};
  box-shadow: 0 2px 28px rgb(0 0 0 / 0.2);
  border-radius: 10px;
  margin-top: -7rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
  }

`

export const Avatar = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
`
export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

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
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  max-width: 23rem;
`;

export const Footer = styled.footer`
  padding-top: 1.5rem;
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
 
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterContentText= styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1rem;
`;


