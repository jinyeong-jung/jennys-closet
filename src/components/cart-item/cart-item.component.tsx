import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";
import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
