import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Skeleton from "@material-ui/lab/Skeleton";

import { BtnStyle } from "../styles/StyleFoods";
import Menu from "./Menu";

import { Creators as ActionsFood } from "../../redux/ducks/food";
import { Creators as ActionCategories } from "../../redux/ducks/categories";

import Slider from "react-slick";

const Foods = () => {
  const food = useSelector(({ food }) => food.foods);
  const loading_food = useSelector(({ food }) => food.loading);
  const dispatch = useDispatch();

  const [foodFilter, setFoodFilter] = useState([]);

  const categories = useSelector((state) => state.categorie.categories);

  const loading_categories = useSelector((state) => state.categorie.loading);

  const handleClick = (event, id) => {
    let menu = food.filter((item) => {
      return item.category_id === id;
    });

    setFoodFilter(menu);
  };

  useEffect(() => {
    if (loading_categories === false && loading_food === false)
      if (categories.length > 0) {
        setFoodFilter(
          food.filter((item) => {
            return item.category_id === categories[0].id;
          })
        );
      }
  }, [food, categories, loading_categories, loading_food]);

  var settings = {
    arrows: false,
    slidesPerRow: 4,
  };

  useEffect(() => {
    dispatch(ActionsFood.readFoodRequest());
    dispatch(ActionCategories.readCategoriesRequest());
  }, [dispatch]);

  return (
    <BtnStyle className="container">
      <div className={`btn-type text-center `}>
        {loading_categories === false ? (
          <Slider {...settings} style={{ height: "50px", marginTop: "50px" }}>
            {categories.map((categorie) => (
              <div
                onClick={(e) => handleClick(e, categorie.id)}
                style={{ width: "100px", height: "50px", fontSize: "22px" }}
              >
                {categorie.name}
              </div>
            ))}
          </Slider>
        ) : (
          <Skeleton>
            <div
              style={{ width: "100px", height: "50px", fontSize: "22px" }}
            ></div>
          </Skeleton>
        )}
      </div>
      <div
        className={`btn-type text-center `}
        style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap" }}
      >
        {foodFilter.map((food) => {
          if (food.disponible) {
            return (
              <>
                {loading_food === false ? (
                  <Menu key={food.id} food={food} />
                ) : (
                  <Skeleton>
                    <Menu />
                  </Skeleton>
                )}
              </>
            );
          }
        })}
      </div>
    </BtnStyle>
  );
};

export default Foods;
