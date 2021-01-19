import React from "react";
import { CardBox } from "./style";

import ModalEditProduct from "../product/update/";

const Menu = ({ food, slug }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { img, name, title, price, id } = food;

  return (
    <>
      <CardBox
        className={`card-box col-lg-4 active-box-${slug}`}
        onClick={handleOpen}
      >
        <div className="card">
          <div className="card-body text-center">
            <img src={img} alt={name} className="img-fluid" />
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{title}</p>
            <h4>
              <strong>R$ {price}</strong>
            </h4>
          </div>
        </div>
      </CardBox>
      <ModalEditProduct handleClose={handleClose} open={open} food={food} />
    </>
  );
};

export default Menu;
