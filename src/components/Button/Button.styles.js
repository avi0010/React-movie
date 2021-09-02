import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--medGrey);
  color: white;
  margin: 20px auto;
  border-radius: 30px;
  width: 25%;
  min-width: 200px;
  height: 60px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: var(--fontMed);
  :hover{
    opacity: 0.95;
  }
`;