import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./toggle-navigation.styles";
import {
  SmallScreenContainer,
  Hamburger,
  MobileOptionContainer,
  MobileOptionLink,
} from "./toggle-navigation.styles";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Toggle = () => {
  const [open, setOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <SmallScreenContainer>
      <div onClick={() => setOpen(false)}>
        <CartIcon />
      </div>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <MobileOptionContainer open={open} onClick={() => setOpen(false)}>
        <MobileOptionLink to='/shop'>SHOP</MobileOptionLink>
        <MobileOptionLink to='/contact'>CONTACT</MobileOptionLink>
        {currentUser ? (
          <MobileOptionLink as='div' onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </MobileOptionLink>
        ) : (
          <MobileOptionLink to='/auth'>sign in</MobileOptionLink>
        )}
      </MobileOptionContainer>
    </SmallScreenContainer>
  );
};

export default Toggle;
