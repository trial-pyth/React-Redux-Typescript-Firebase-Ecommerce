import { Fragment, useContext } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { Outlet, Link } from "react-router-dom";

import SportLogo from "../../assets/original-7ae73f33662c5f64b8f0ed10e06dfcda-removebg-preview.png";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={SportLogo} alt="" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
