import styled from "styled-components";
import bg from "../../Image/bg.png";

export const Container = styled.div`
  background: url(${bg}) center/cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 400px;
  width: 100%;

  .hero-content {
    h1 {
      letter-spacing: 2px;
      font-size: 6em;
      font-family: "SulSans, Helvetica, sans-serif";
    }
  }
`;
