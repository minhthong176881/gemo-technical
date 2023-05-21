import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavRightLink,
  // NavBtn,
  // NavBtnLink,
} from "./navbarElement.js";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { ModalCart } from "../../pages/cart.js";
import i18n from "../../i18.js";

const handleMenuClick = (e) => { };

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
      <NavLink to="/menu">
        Menu
      </NavLink>
    ),
  },
  {
    key: '3',
    label: (
      <NavLink to="/cart">
        Cart
      </NavLink>
    ),
  },
  {
    key: '4',
    label: (
      <NavLink to="/login">
        Login
      </NavLink>
    ),
  },
];

const userItems = [
  {
    key: '1',
    label: (
      <NavLink to="/login">
        Login
      </NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink to="/signup">
        Sign up
      </NavLink>
    ),
  },
]

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const userProps = {
  userItems,
  onclick: handleMenuClick
}

const Navbar = () => {
  const getLang = () => {
    var lang = localStorage.getItem('lang');
    if (lang) {
      i18n.changeLanguage(lang)
      if (lang === 'en') return 'vn'
      else return 'en'
    }
    else {
      i18n.changeLanguage('en')
      localStorage.setItem('lang', 'en')
      return 'vn'
    }
  }
  const [isModalOpen, setOpenModal] = useState(false)
  const [lang, setLang] = useState(getLang)

  const changeLanguage = () => {
    i18n.changeLanguage(lang)

    if (lang === 'en') {
      setLang('vn')
    } else if (lang === 'vn') setLang('en')

    localStorage.setItem('lang', lang)
  }

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
        <NavRightLink>
          <NavLink>
            <ShoppingCartOutlined style={{ fontSize: 25 }} onClick={() => { setOpenModal(true) }} />
            <Button type="primary" shape="round" className="btn-brown" style={{ marginLeft: "20px" }} onClick={changeLanguage}>{lang}</Button>
            {/* <Dropdown menu={userProps}>
              <UserOutlined />
            </Dropdown> */}
            <NavLink to="/login">
              Login
            </NavLink>
          </NavLink>
        </NavRightLink>
      </Nav>
      {isModalOpen && <ModalCart isModalOpen={isModalOpen} handleClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Navbar;
