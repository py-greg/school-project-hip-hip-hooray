import { Nav, NavBrand, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavBrand to="/">QRCLOUD</NavBrand>
      <NavMenu>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
