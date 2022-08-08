import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CategoryItem } from "../../store/categories/category.types";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer, Name } from "./product-card.styles";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <span>${price}</span>
      </Footer>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
