import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
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
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    color: #ff7878;
  }
`;
