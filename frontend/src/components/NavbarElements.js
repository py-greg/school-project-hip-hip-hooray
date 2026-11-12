import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #0b1f33;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const NavBrand = styled(Link)`
  color: #ffffff;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.04em;
  text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 64px;
  cursor: pointer;

  &.active {
    color: #61dafb;
  }
`;
