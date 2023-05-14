import React from "react";
import { Dropdown } from "antd";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./navbarElement.js";

const handleMenuClick = (e) => {};

const items = [
  {
    key: '1',
    label: (
      <NavLink to="/">
        Home
      </NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink to="/Menu">
        Menu
      </NavLink>
    ),
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Navbar = () => {
  return (
    <>
      <Nav>
        <Dropdown menu={menuProps}>
          <Bars />
        </Dropdown>
        <NavMenu>
          <NavLink to="/">
            <img style={{ height: "80px" }} src={process.env.PUBLIC_URL + '/Bbbtokaba.webp'} alt="logo" />
          </NavLink>
          <NavLink to="/Menu">
            Menu
          </NavLink>
          {/* <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
