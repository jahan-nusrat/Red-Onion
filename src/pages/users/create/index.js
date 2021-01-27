import React, { useState, memo } from "react";

import { Modal, Typography } from "@material-ui/core/";

import { Creators as UserAction } from "../../../redux/ducks/user";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

const ModalCreateFood = () => {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  /**
   * verificar o porque do state.users.create_user nao estar sendo encontrado
   */
  // const open = useSelector((state) => state.users.create_user);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nome,
      email: email,
      password: senha
    };

    dispatch(UserAction.createusersRequest(data));
    handleClose();
  };

  const handleClose = () => {
    dispatch(UserAction.hideModalCreateuser());
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "550px",
            display: "flex",
            flexDirection: "column",
            padding: "20px 40px",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "20px" }}>
            Criar Nova Conta
          </Typography>
          <div style={{ marginBottom: "20px" }}>
            <Input
              onChange={(e) => setNome(e.target.value)}
              label={"Nome"}
              type={"text"}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label={"E-mail"}
              type={"email"}
            />
          </div> <div style={{ marginBottom: "20px" }}>
            <Input
              onChange={(e) => setSenha(e.target.value)}
              label={"Senha"}
              type={"password"}
            />
          </div>

          <Button
            name={"Criar"}
            type={"submit"}
            style={{ marginBottom: "20px" }}
          />
        </form>
      </div>
    </Modal>
  );
};

export default memo(ModalCreateFood);
