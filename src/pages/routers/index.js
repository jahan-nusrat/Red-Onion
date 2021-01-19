import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import Products from "../list";
import Categories from "../categories/list";

export default () => {
  const location = useSelector(({ routes }) => routes.page);

  return (
    <div>
      <Suspense fallback={<div />}>{Route[location]}</Suspense>
    </div>
  );
};

const Route = {
  default: <div />,
  products: <Products />,
  categories: <Categories />,
};
