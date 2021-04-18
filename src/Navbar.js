import React, { useState, useEffect, useRef } from 'react';
import {
  FaPlus,
  FaBell,
  FaFacebookMessenger,
  FaAngleDown,
  FaArrowCircleLeft,
  FaStar,
} from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

const Navbar = props => {
  return (
    <nav className='navbar'>
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
      <a href='/' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  const DropdownItem = props => {
    return (
      <a
        href='/'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  };

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<FaArrowCircleLeft />}
            rightIcon={<FaStar />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
          <DropdownItem leftIcon='🦧' rightIcon={<FaStar />} goToMenu='animals'>
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<FaArrowCircleLeft />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaStar />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<FaStar />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<FaStar />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<FaStar />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames='menu-secondary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<FaArrowCircleLeft />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon='🦘'>Kangaroo</DropdownItem>
          <DropdownItem leftIcon='🐸'>Frog</DropdownItem>
          <DropdownItem leftIcon='🦋'>Horse?</DropdownItem>
          <DropdownItem leftIcon='🦔'>Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
