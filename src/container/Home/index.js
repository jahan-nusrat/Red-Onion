import React from "react";

import Banner from "../Banner";
import Foods from "../../components/Food-items/Foods";

const Home = () => {
  return (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <Banner />
      <Foods />
    </header>
  );
};

export default Home;
