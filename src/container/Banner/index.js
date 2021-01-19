import React from "react";
import { Container } from "./style";

const Banner = () => {
  return (
    <Container className="hero">
      <div className="container text-center hero-content">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1>Cardápio</h1>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
