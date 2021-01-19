import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const CreateCategorieModal = lazy(() => import("./pages/categories/create"));

const UpdateCategorieModal = lazy(() => import("./pages/categories/update"));

const CreateFoodModal = lazy(() => import("./pages/product/create"));

const UpdateFoodModal = lazy(() => import("./pages/product/update"));

const Main = () => {
  const CreateCategorie = () => create(<CreateCategorieModal />);
  const UpdateCategorie = () => create(<UpdateCategorieModal />);

  const CreateFood = () => create(<CreateFoodModal />);
  const UpdateFood = () => create(<UpdateFoodModal />);

  return (
    <Suspense fallback={<div />}>
      <CreateCategorie />
      <UpdateCategorie />

      <CreateFood />
      <UpdateFood />
    </Suspense>
  );
};

const create = (Component) =>
  ReactDOM.createPortal(Component, document.getElementById("main-portal"));

export default Main;
