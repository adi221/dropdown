import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Sidebar = ({ countries, setNewContent }) => {
  return (
    <ul className='sidebar'>
      {Object.keys(countries).map((region, index) => {
        return (
          <SidebarItem
            role='listitem'
            key={index}
            text={region}
            clicked={setNewContent}
            items={Object.values(countries)[index]}
          />
        );
      })}
    </ul>
  );
};

const SidebarItem = ({ items, text, clicked }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className='sidebar-item'>
      <div className='sidebar-item-header'>
        <p>{text}</p>
        <button
          className={`sidebar-button ${open ? 'open-sidebar-button' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronRight />
        </button>
      </div>
      {open && (
        <ul className='sidebar-item-list'>
          {items.map((item, index) => {
            return (
              <li key={index} onClick={() => clicked(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
