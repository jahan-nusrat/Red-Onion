import React, { useEffect, lazy } from "react";

import MaterialTable from "material-table";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsUser } from "../../../redux/ducks/user";

const List = () => {
    /**
     * verificar porque o state de listagem de usuario nao estar sendo achado
     */
//   const users = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsUser.readusersRequest());
  }, [dispatch]);

  return (
    <>
      <MaterialTable
        title={"Equipe"}
        data={[]}
        columns={[{ title: "Nome", field: "name" }, { title: "E-mail", field: "email"},
        { title: "Senha", field: "senha" }]}
        actions={[
          {
            isFreeAction: true,
            icon: "add",
            tooltip: "Criar Nova Conta",
            onClick: (event, rowData) => {
              dispatch(CreatorsUser.showModalCreateuser());
            },
          },
          {
            icon: "delete",
            tooltip: "Deletar Categoria",
            onClick: (event, rowData) =>
              dispatch(CreatorsUser.deleteusersRequest(rowData.id)),
          },
          {
            icon: "edit",
            tooltip: "Editar Usuário",
            onClick: (event, rowData) =>
              dispatch(CreatorsUser.showModalUpdateuser(rowData)),
          },
        ]}
      />
    </>
  );
};

export default List;
