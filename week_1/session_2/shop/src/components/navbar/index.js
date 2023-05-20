import React, { useState } from "react";
import { Button, Dropdown } from "antd";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./navbarElement.js";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
      <NavLink to="/Menu">
        Menu
      </NavLink>
    ),
  },
  {
    key: '3',
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
        <NavLink>
          <ShoppingCartOutlined style={{ fontSize: 25 }} onClick={() => { setOpenModal(true) }} />
          <Button type="primary" shape="round" style={{ marginLeft: "20px" }} onClick={changeLanguage}>{lang}</Button>
        </NavLink>
      </Nav>
      {isModalOpen && <ModalCart isModalOpen={isModalOpen} handleClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Navbar;
