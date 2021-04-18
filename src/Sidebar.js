import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <ul className='sidebar'>
      <SidebarItem text='Intrtoduction' />
      <SidebarItem text='Tutorials' />
      <SidebarItem text='Recipes' />
      <SidebarItem text='Cookbook' />
    </ul>
  );
};

const SidebarItem = props => {
  const [open, setOpen] = useState(false);
  return (
    <li className='sidebar-item'>
      <div className='sidebar-item-header'>
        <p>{props.text}</p>
        <button
          className={`sidebar-button ${open ? 'open-sidebar-button' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronRight />
        </button>
      </div>
      {open && <p className='sidebar-item-content'>Hello !</p>}
    </li>
  );
};

export default Sidebar;
