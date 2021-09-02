import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--darkGrey);
  padding: 0 20px;
  height: 60px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background-color: var(--medGrey);
  margin: 0 auto;
  img{
    position: absolute;
    top: 8px;
    left: 10px;
    width: 25px;
  }
  input{
    position: absolute;
    left: 40px;
    width: 95%;
    top: 5px;
    height: 30px;
    background-color: transparent;
    outline: none;
    color: white;
    border: 0;
    font-size: 15px;
    :focus{
      outline: none;
    }
  }
`;