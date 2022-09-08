import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>

        <Link to='/Orders'>
          <div className="header_options">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>


        <div className="header_options">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_options"></div>

        <Link to="/Checkout">
          <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCourt">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
