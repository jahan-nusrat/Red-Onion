import styled from "styled-components";
import bg from "../../assets/img/logo.png";
import bgMobile from "../../assets/img/logo-mobile.png";

export const Container = styled.div`
  background: url(${bg}) center/cover;

  height: 400px;
  width: 100%;

  @media (max-width: 800px) {
    background: url(${bgMobile}) center/cover;
    height: 300px;
  }
`;
