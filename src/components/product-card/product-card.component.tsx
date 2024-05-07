import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { CategoryItem } from '../../store/categories/category.types';

import Button, {
  BUTTON_TYPE_CLASSES,
} from '../button/button.component';

import { ProductCartContainer, Footer } from './product-card.styles';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <p>{name}</p>
        <p>£ {price}</p>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
