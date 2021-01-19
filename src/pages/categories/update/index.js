import React, { useState, useEffect, memo } from "react";

import { Modal, Typography } from "@material-ui/core/";

import { Creators as CategoriesAction } from "../../../redux/ducks/categories";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../../components/Input";
import Button from "../../../components/Button";

const ModalEditProduct = () => {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");

  const open = useSelector((state) => state.categorie.update_categorie);
  const data = useSelector((state) => state.categorie.update_categorie_data);

  useEffect(() => {
    if (open) {
      setNome(data.name);
    }
  }, [open, data]);

  const onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: data.id,
      name: nome,
    };

    dispatch(CategoriesAction.updateCategoriesRequest(obj));
    handleClose();
  };

  const handleClose = () => {
    dispatch(CategoriesAction.hideModalUpdateCategorie());
  };

  return (
    <Modal
      open={open}
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
            Editar Categoria
          </Typography>
          <div style={{ marginBottom: "20px" }}>
            <Input
              onChange={(e) => setNome(e.target.value)}
              label={"Nome"}
              type={"text"}
              value={nome}
            />
          </div>

          <Button
            name={"Atualizar"}
            type={"submit"}
            style={{ marginBottom: "20px" }}
          />
        </form>
      </div>
    </Modal>
  );
};

export default memo(ModalEditProduct);
