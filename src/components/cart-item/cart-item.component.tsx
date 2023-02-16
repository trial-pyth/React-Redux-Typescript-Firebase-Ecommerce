import "./cart-item.styles.scss";
import { memo } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="price">
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
});

export default CartItem;
