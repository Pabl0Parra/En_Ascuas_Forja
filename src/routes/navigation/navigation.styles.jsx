import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 101;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #ff7878;
  }
`;
