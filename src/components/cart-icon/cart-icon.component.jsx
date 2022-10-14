import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import {useContext} from "react";
import {CartContext} from "../../contex/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className={"cart-icon-container"} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={"shopping-icon"}/>
      <span className={"item-count"}>{cartCount}</span>
    </div>
  )
}

export default CartIcon;