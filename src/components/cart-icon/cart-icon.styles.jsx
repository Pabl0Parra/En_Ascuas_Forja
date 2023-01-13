import styled from "styled-components";
import "animate.css";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: zoomInUp;
  animation-duration: 2.5s;

  &:hover {
    color: red;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
