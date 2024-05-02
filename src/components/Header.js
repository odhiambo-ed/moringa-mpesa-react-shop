import React from "react";
import "./Header.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">edSHOP</h2>
      </div>
      <div className="header__search">
        <input className="search__input" type="text" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="item__lineOne">Hi Guest</span>
          <span className="item__lineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="item__lineOne">Your</span>
          <span className="item__lineTwo">Shop</span>
        </div>
        <div className="nav__itemBasket">
          <AddShoppingCartIcon />
          <span className="item__lineTwo nav__basketCount">1</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
