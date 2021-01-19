import React, { useState, useEffect } from "react";
import Menu from "../menu";

import IconButton from "../../components/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Creators as ActionsFood } from "../../redux/ducks/food";

import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const foods = useSelector((state) => state.food.foods);

  const loading = useSelector((state) => state.food.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionsFood.readFoodRequest());
  }, [dispatch]);

  const handleOpen = () => {
    dispatch(ActionsFood.showModalCreateFood());
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "20px",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "10px 0px",
              fontFamily: "SulSans, Helvetica, sans-serif",
              fontWeight: "bold",
            }}
          >
            <label style={{ margin: "0px" }}>Buscar:</label>
            <input
              type="text"
              style={{
                border: "1px solid #E1E3E6",
                color: "#E1E3E6",
                backgroundColor: "#fff",

                height: "40px",
                borderRadius: "5px",
                width: "100%",
                fontSize: "18px",
                marginLeft: "15px",
                marginRight: "15px",
              }}
            />
          </div>

          <IconButton Component={AddIcon} onClick={() => handleOpen()} />
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            marginTop: "30px",
          }}
        >
          {foods.map((food) => {
            return <Menu key={food.id} food={food} slug={foods[0]?.slug} />;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
