import React from "react";
import logo from "../../Image/logo2.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Items } from "./style";
import { useSelector } from "react-redux";

const NavBar = () => {
  const loginInfo = useSelector((state) => state.userInfo);
  const cartQuantity = useSelector((state) => state.cart);

  const signedOut = () => {};

  return (
    <Items className="container nav-box">
      <div className="row justify-content-between align-items-center">
        <div className="logo col-md-3">
          <Link to="/">
            <img src={logo} alt="logo" className="img-fluid logo" />
          </Link>
        </div>
        <div className="items col-md-5 ">
          <ul className="nav justify-content-end">
            <li className="shopping-cart">
              <Link to="/cart">
                <FaShoppingCart className="cart" />{" "}
                <span>
                  <strong>{cartQuantity.length}</strong>
                </span>
              </Link>
            </li>
            <li>
              {loginInfo.displayName ? (
                <Link to="/user-info" className="user">
                  {loginInfo.displayName}
                </Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              {loginInfo.email ? (
                <Link to="/" onClick={signedOut}>
                  Logout
                </Link>
              ) : (
                <Link to="/signup">Sign up</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Items>
  );
};

export default NavBar;
