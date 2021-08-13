import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white : #fff;
        --lightGrey : #eee;
        --medGrey : #353535;
        --darkGrey : #1c1c1c;
        --fontBig : 1.5rem;
        --fontMed: 1rem;
        --fontSmall: 0.75rem
    }
    
    *{
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    body{
        margin: 0;
        padding: 0;
        h1{
            font-size: var(--fontBig);
            color: var(--white);
            font-weight: 600;
        }
        
        h2{
            font-weight: 600;
            font-size: var(--fontMed);
        }
        
        h3{
            font-size: var(--fontSmall);
            font-weight: 600;
        }
    }
`