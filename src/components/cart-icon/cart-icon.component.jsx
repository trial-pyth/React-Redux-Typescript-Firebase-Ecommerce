import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  // console.log(cartCount);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <ShoppingIcon
        className="shopping-icon"
        stroke="white"
        onClick={toggleIsCartOpen}
      />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
