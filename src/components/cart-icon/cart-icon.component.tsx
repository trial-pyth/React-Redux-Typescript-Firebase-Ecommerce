import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";

import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  // console.log(cartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <ShoppingIcon
        className="shopping-icon"
        stroke="white"
        onClick={toggleIsCartOpen}
      />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
