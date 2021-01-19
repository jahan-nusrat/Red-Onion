import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { BtnStyle } from "../styles/StyleFoods";
import Menu from "./Menu";
import { Creators as ActionsFood } from "../../redux/ducks/food";

const Foods = () => {
  const history = useHistory();
  const cartFoods = useSelector((state) => state);
  const food = useSelector(({ food }) => food.foods);
  const dispatch = useDispatch();
  const [item, setItems] = useState({});
  /*
  const [showItems, setShowItems] = useState({
    type: "Breakfast",
    property: food[0],
    slug: "breakfast",
  });

  

  
  useEffect(() => {
    let foods = food.filter((item) => {
      return item.type === showItems.type;
    });
    setItems(foods);
  }, [showItems.type]);*/

  const handleClick = (event) => {
    let menu = food.filter((item) => {
      return item.type === event.currentTarget.innerText;
    });
    /*
    setShowItems({
      type: menu[0].type,
      property: food[menu[0].id],
      slug: menu[0].slug,
    });*/
  };

  const checkoutClick = () => {
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(ActionsFood.readFoodRequest());
  }, [dispatch]);

  return (
    <BtnStyle className="container">
      <div>
        {/*
        <button onClick={handleClick} className="btn mx-3 breakfast">
          Breakfast
      </button>*/}
      </div>
      <div
        className={`btn-type text-center `}
        style={{ display: "flex", flexDirection: "row", flexFlow: "row wrap" }}
      >
        {food.map((food) => {
          return <Menu key={food.id} food={food} slug={item.slug} />;
        })}
      </div>
      <div className="checkout">
        <button onClick={checkoutClick} className="btn checkout-btn">
          Checkout Your Food
        </button>
      </div>
    </BtnStyle>
  );
};

export default Foods;

/*
className={`row active-item-${showItems.property.id}`} -> dentro a div do food

className={`btn-type text-center active-${showItems.property.id}`} --> div dos buttons

<button onClick={handleClick} className="btn mx-3 lunch">
          Lunch
        </button>
        <button onClick={handleClick} className="btn mx-3 dinner">
          Dinner
        </button>


*/
