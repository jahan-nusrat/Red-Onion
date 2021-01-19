import React, { useEffect, lazy } from "react";

import MaterialTable from "material-table";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsCategories } from "../../../redux/ducks/categories";

const List = () => {
  const categories = useSelector((state) => state.categorie.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsCategories.readCategoriesRequest());
  }, [dispatch]);

  return (
    <>
      <MaterialTable
        title={"Categorias"}
        data={categories}
        columns={[{ title: "Nome", field: "name" }]}
        actions={[
          {
            isFreeAction: true,
            icon: "add",
            tooltip: "Criar Nova Categoria",
            onClick: (event, rowData) => {
              dispatch(CreatorsCategories.showModalCreateCategorie());
            },
          },
          {
            icon: "delete",
            tooltip: "Deletar Categoria",
            onClick: (event, rowData) =>
              dispatch(CreatorsCategories.deleteCategoriesRequest(rowData.id)),
          },
          {
            icon: "edit",
            tooltip: "Editar Categoria",
            onClick: (event, rowData) =>
              dispatch(CreatorsCategories.showModalUpdateCategorie(rowData)),
          },
        ]}
      />
    </>
  );
};

export default List;
