import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import SportLogo from "../../assets/original-7ae73f33662c5f64b8f0ed10e06dfcda-removebg-preview.png";
import "./navigation.styles.scss";
const Navigation = () => {
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
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
