import { Fragment } from "react";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { Outlet, Link } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import SportLogo from "../../assets/original-7ae73f33662c5f64b8f0ed10e06dfcda-removebg-preview.png";
import "./navigation.styles.scss";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());
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
