import { Nav, NavBrand, NavLink, NavMenu } from "./NavbarElements";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <img src={logo} className="App-logo" alt="logo" />
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
