import React from "react";

import { Creators as ActionFood } from "../../redux/ducks/food";
import { useDispatch } from "react-redux";

import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { CardBox } from "./style";

const Menu = ({ food, slug }) => {
  const { id, name, title, price, image } = food;

  const dispatch = useDispatch();

  const deleteFood = (id) => {
    dispatch(ActionFood.deleteFoodRequest(id));
  };

  const editFood = (food) => {
    dispatch(ActionFood.showModalUpdateFood(food));
  };
  return (
    <>
      <CardBox className={`card-box col-lg-4 active-box-${slug}`}>
        <div className="card">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <IconButton aria-label="delete" onClick={() => editFood(food)}>
              <EditIcon style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color="secondary" onClick={() => deleteFood(id)}>
              <CloseIcon style={{ fontSize: 30 }} />
            </IconButton>
          </div>
          <div className="card-body text-center">
            <img src={image.url} alt={name} className="img-fluid" />
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{title}</p>
            <h4 style={{ marginTop: "10px" }}>
              <strong>R${price}</strong>
            </h4>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default Menu;
