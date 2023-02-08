import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // console.log(cartCount);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon
        className="shopping-icon"
        stroke="white"
        style={{ height: "1000px", width: "1000px" }}
        onClick={toggleIsCartOpen}
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
