import React, { useState } from 'react';

import DownCaret from 'assets/icons/down-caret.svg';

import { navigate } from 'gatsby';

import './Header.css';
// import { useNavigate } from "react-router-dom";

export default function ResponsiveMenuItem({ menuItem, setShowMenu }) {
  // const navigate = useNavigate();

  const [showItems, setShowItems] = useState(false);
  console.log(menuItem);
  return (
    <div
      onClick={() => {
        setShowItems((prevData) => !prevData);
      }}
      style={{ cursor: 'pointer' }}
    >
      <div className="header--responsive-menu-item ">
        {menuItem.link && (
          <a
            style={{ textDecoration: 'none', color: '#335075' }}
            onClick={() => {
              setShowMenu(false);
              document.body.style.overflow = 'scroll';
            }}
            href={menuItem.link}
          >
            {menuItem.itemTitle}
          </a>
        )}
        {!menuItem.link && <div>{menuItem.itemTitle}</div>}
        {menuItem?.subMenuItems?.length > 0 && (
          <img
            className={
              showItems ? 'header--menu-caret-show' : 'header--menu-caret'
            }
            src={DownCaret}
            height={15}
            width={15}
          />
        )}
      </div>
      {showItems &&
        menuItem?.subMenuItems?.map((el, index) => {
          return (
            <div key={index}>
              <div className="header--responsive-menu-item-title">
                {el.itemTitle}
              </div>
              {el.items.map((el, index) => {
                return (
                  <a
                    key={index}
                    onClick={() => {
                      setShowMenu(false);
                      document.body.style.overflow = 'scroll';
                    }}
                    className="header--responsive-menu-subitem"
                    href={el.link}
                  >
                    {el.title}
                  </a>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
