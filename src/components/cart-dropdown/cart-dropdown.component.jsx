import "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../contex/cart.context";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;