import { useDispatch, useSelector } from "react-redux";

import ClickAwayListener from "@mui/base/ClickAwayListener";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const handleClickAway = () => {};

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    </ClickAwayListener>
  );
};

export default CartIcon;
