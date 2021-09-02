import styled from "styled-components"

export const Wrapper = styled.div`
    background-image: url(${({image}) => image});
    background-size: cover;
    background-position: center;
    height: 650px;
    position: relative;
`;

export const Content = styled.div`
    padding: 20px;
    margin: 0;
    max-width: var(--maxWidth);
`;

export const Text = styled.div`
    z-index:100;
    position: absolute;
    bottom: 30px;
    margin-left: 20px;
    max-width:800px;
    min-height: 100px;
    color: white;
    font-family: 'Fredoka One', cursive;
    h1{
        font-size: var(--fontBig)
        @media screen and (max-width:640px){
            font-size: var(--fontMed);
        }
    }
    p{
        font-size: var(--fontMed);
        @media screen and (max-width:640px){
            font-size: var(--fontSmall);
        }
    }
`;