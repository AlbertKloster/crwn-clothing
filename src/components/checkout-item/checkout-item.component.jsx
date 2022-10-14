import "./checkout-item.styles.scss";
import {useContext} from "react";
import {CartContext} from "../../contex/cart.context";

const CheckoutItem = ({cartItem}) => {

  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItem = () => clearItemFromCart(cartItem);

  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemFromCart(cartItem);

  return (
    <div className={"checkout-item-container"}>
      <div className={"image-container"}>
        <img src={imageUrl} alt={name} />
      </div>
      <span className={"name"}>{name}</span>
      <span className={"quantity"}>
        <div className={"arrow"} onClick={removeItem}>&#10094;</div>
        <span className={"value"}>{quantity}</span>
        <div className={"arrow"} onClick={addItem}>&#10095;</div>
      </span>
      <span className={"price"}>${price}</span>
      <span className={"remove-button"} onClick={clearItem}>&#10005;</span>
    </div>
  );
};

export default CheckoutItem;