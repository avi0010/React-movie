import styled from "styled-components";
import {BACKDROP_SIZE, IMAGE_BASE_URL} from "../../config";


export const Wrapper = styled.div`
  background: ${({backdrop}) => (
          backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "black"
  )};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
}
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  background: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  border-radius: 20px;
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: white;
  overflow: hidden;

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: white;
    color: black;
    font-weight: 800;
    margin: 0;
  }
  
  .director{
    margin: 0 0 0 30px;
    p{
      margin: 0;
    }
  }

`;