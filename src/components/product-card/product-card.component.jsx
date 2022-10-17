import "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contex/cart.context";
import {ProductCardContainer} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;
  const { addItemToCart } = useContext(CartContext);
  const handleClick = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <div className={"footer"}>
        <span className={"name"}>{name}</span>
        <span className={"price"}>${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleClick}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;