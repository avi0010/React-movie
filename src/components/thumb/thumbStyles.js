import styled from "styled-components"

export const Img = styled.img`
  width: 100%;
  max-width: 720px;
  transition: transform .3s;
  object-fit: cover;
  border-radius: 20px;
  :hover{
    opacity: 0.9;
    transform: scale(1.1);
  }
`;