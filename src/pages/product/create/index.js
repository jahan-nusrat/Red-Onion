import React, { useState, useEffect } from "react";

import { Modal, Typography } from "@material-ui/core/";

import { Creators as FoodAction } from "../../../redux/ducks/food";
import { Creators as ActionCategories } from "../../../redux/ducks/categories";

import { useDispatch } from "react-redux";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import TextArea from "../../../components/TextArea";
import CheckBox from "../../../components/CheckBox";
import Image from "../../../components/ImageInput";
import Select from "../../../components/Select";

import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import { useSelector } from "react-redux";

const ModalEditProduct = () => {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [disponivel, setDisponivel] = useState(false);

  const open = useSelector((state) => state.food.create_food);
  const categories = useSelector((state) => state.categorie.categories);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(imagem);

    const data = {
      name: nome,
      title: titulo,
      info: descricao,
      price: valor,
      categoria,
      disponivel,
    };

    handleClose();
    dispatch(FoodAction.createFoodRequest({ food: data, image: imagem }));
  };

  const handleClose = () => {
    dispatch(FoodAction.hidevModalCreateFood());
  };

  const onChange = (event) => {
    setImagem(event.target.files[0]);
  };

  useEffect(() => {
    dispatch(ActionCategories.readCategoriesRequest());
  }, [dispatch]);

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
            width: "636px",
            display: "flex",
            flexDirection: "column",
            padding: "20px 40px",
          }}
        >
          <Typography variant="h4">Criar Novo Prato</Typography>
          <Input
            onChange={(e) => setNome(e.target.value)}
            label={"Nome"}
            type={"text"}
          />
          <Input
            label={"Titulo"}
            type={"text"}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextArea
            label={"Descrição"}
            rows={"3"}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 0px",
                fontFamily: "SulSans, Helvetica, sans-serif",
                fontWeight: "bold",
                width: "50%",
                marginRight: "10px",
              }}
            >
              <label>Valor:</label>
              <CurrencyTextField
                currencySymbol="R$"
                variant="outlined"
                unselectable
                size="small"
                fullWidth
                onChange={(event, value) => setValor(value)}
              />
            </div>
            <Select
              label="Categoria"
              onChange={(e) => setCategoria(e.target.value)}
              options={categories}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
              <Image type="file" onChange={(e) => onChange(e)} required />
            </div>

            <CheckBox
              label="Disponivel"
              style={{ width: "70px" }}
              onChange={(e) => setDisponivel(e.target.checked)}
            />
          </div>

          <Button name={"Criar"} type={"submit"} />
        </form>
      </div>
    </Modal>
  );
};

export default ModalEditProduct;
