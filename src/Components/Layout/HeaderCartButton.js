import { useContext } from "react";
import CartContext from "../../store/cart-context";
import React from "react";
import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
return(curNumber+item.amount);
    },0);
    return(
        <div className={classes.container}>
<button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}>
    <CartIcon className="icon-small"/>
</span>
<span className="d-inline">Your Cart</span>
<span className={classes.badge}>
    {numberOfCartItems}
</span>
</button>
</div>
    );

};
export default HeaderCartButton;