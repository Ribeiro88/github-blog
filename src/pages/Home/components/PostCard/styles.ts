import styled from "styled-components";

export const PostCardContainer = styled.a`
  padding: 2rem;
  border-radius: 10px;
  text-decoration: none;

  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-post"]};
  border: 2px solid ${(props) => props.theme["base-post"]};
  transition: border-color 100ms linear;

  &:hover {
    border-color: ${(props) => props.theme["base-label"]};
  }
  
`;

export const PostCardHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const PostCardHeaderTitle = styled.h2`
  font-size: 1.25rem;
`;

export const PostCardHeaderDate = styled.span`
  display: inline-block;
  margin-top: calc(0.125rem * 2 * 1.6);
  color: ${(props) => props.theme["base-span"]};
  white-space: nowrap;
  font-size: 0.875rem;
`;

export const PostCardContent = styled.p`
  margin-top: 1.25rem;
  font-size: 1rem;
`;