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

  const categories = useSelector((state) => state.categorie.categories);
  const open = useSelector((state) => state.food.update_food);
  const food = useSelector((state) => state.food.update_categorie_date);

  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem, setImagem] = useState("");
  const [disponivel, setDisponivel] = useState(false);

  console.log(food);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: food.id,
      name: nome,
      title: titulo,
      info: descricao,
      price: valor,
      categoria,
      disponivel,
      imagem: food.image,
    };

    if (imagem) {
      dispatch(
        FoodAction.updateFoodImageRequest({ food: data, image: imagem })
      );
    } else {
      dispatch(FoodAction.updateFoodRequest(data));
    }

    handleClose();
  };

  useEffect(() => {
    setNome(food.name);
    setTitulo(food.title);
    setDisponivel(food.disponible);
    setValor(food.price);
    setDescricao(food.description);
  }, [food.description, food.disponible, food.name, food.price, food.title]);

  useEffect(() => {
    dispatch(ActionCategories.readCategoriesRequest());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(FoodAction.hideModalUpdateFood());
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
            width: "636px",
            display: "flex",
            flexDirection: "column",
            padding: "20px 40px",
          }}
        >
          <Typography
            variant="h4"
            style={{ marginTop: "15px", marginBottom: "15px" }}
          >
            Editar Prato
          </Typography>
          <Input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            label={"Nome"}
            type={"text"}
          />
          <Input
            value={titulo}
            label={"Titulo"}
            type={"text"}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextArea
            value={descricao}
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
                value={valor}
              />
            </div>
            <Select
              label="Categoria"
              onChange={(e) => setCategoria(e.target.value)}
              value={categoria}
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
              <Image
                type="file"
                onChange={(e) => setImagem(e.target.files[0])}
              />
            </div>

            <CheckBox
              label="Disponivel"
              style={{ width: "70px" }}
              onChange={(e) => setDisponivel(e.target.checked)}
              checked={disponivel}
            />
          </div>

          <Button name={"Atualizar"} type={"submit"} />
        </form>
      </div>
    </Modal>
  );
};

export default ModalEditProduct;
