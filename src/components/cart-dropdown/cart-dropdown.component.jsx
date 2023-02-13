import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useDisptch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const goToCheckoutHandler = () => {
    // console.log(currentUser);
    setIsCartOpen(false);
    if (currentUser) {
      navigate("/checkout");
    } else navigate("/auth");

    dispatch(setIsCartOpen(false));
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems?.length ? (
          cartItems?.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
