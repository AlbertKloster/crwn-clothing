import "./checkout-item.styles";
import {useContext} from "react";
import {CartContext} from "../../contex/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItem = () => clearItemFromCart(cartItem);

  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;