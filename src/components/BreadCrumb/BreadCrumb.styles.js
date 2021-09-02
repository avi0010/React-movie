import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 70px;
  background: var(--medGrey);
  color: white;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  
  span{
    font-size: var(--fontMed);
    color: white;
    padding-right: 10px;
  }
  
  a, a:hover, a:focus, a:active{
    text-decoration: none;
    color: inherit;
  }
`;