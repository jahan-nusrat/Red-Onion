import React from "react";

import Banner from "../Banner";
import Foods from "../../components/Food-items/Foods";
import Service from "../../components/services/Service";

const Home = () => {
  return (
    <header>
      <Banner />
      <Foods />
      <Service />
    </header>
  );
};

export default Home;
