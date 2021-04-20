import React, { useState } from 'react';
import {
  FaPlus,
  FaBell,
  FaFacebookMessenger,
  FaAngleDown,
  FaStar,
} from 'react-icons/fa';

const Navbar = props => {
  return (
    <nav className='navbar' role='navigation'>
      <ul className='navbar-nav'>
        <NavItem icon={<FaPlus />} />
        <NavItem icon={<FaBell />} />
        <NavItem icon={<FaFacebookMessenger />} />
        <NavItem icon={<FaAngleDown />}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = props => {
  const [open, setOpen] = useState(false);

  return (
    <li className='nav-item'>
      <a
        href='/'
        className='icon-button'
        onClick={e => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = () => {
  return (
    <ul className='dropdown'>
      <DropdownItem icon={<FaStar />} text='Profile' />
      <DropdownItem icon={<FaStar />} text='Settings' />
    </ul>
  );
};

const DropdownItem = props => {
  return (
    <li>
      <a href='/' className='dropdown-item'>
        {props.icon}
        {props.text}
      </a>
    </li>
  );
};

export { DropdownMenu };
export default Navbar;
