import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Logo from 'assets/icons/coach-logo.svg';
import LogoDarkMode from 'assets/icons/coach-logo-dark-mode.svg';
import BurgerMenu from 'assets/icons/menu-burger.svg';
import { navigate } from 'gatsby';
import './Header.css';
import ResponsiveMenuItem from './ResponsiveMenuItem';

export function Header({ isDark, data }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    document.body.style.overflow = showMenu ? 'scroll' : 'hidden';
    setShowMenu((prevData) => !prevData);
  }

  return (
    <div className="header">
      <div className={isDark ? 'header--wrapper dark' : 'header--wrapper'}>
        <div className="header-container">
          <div className="header-with-items">
            <img
              className="header--logo"
              src={isDark ? LogoDarkMode : Logo}
              onClick={() => {
                navigate('/');
                document.body.style.overflow = 'scroll';
                setShowMenu(false);
              }}
            />

            <div className="header--menu-list">
              {data?.map((el) => {
                return (
                  <React.Fragment key={el.itemTitle}>
                    <MenuItem
                      text={el.itemTitle}
                      items={el.subMenuItems}
                      link={el.link}
                      isDark={isDark}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div
            className={
              showMenu
                ? 'header--full-menu-container-visible'
                : 'header--full-menu-container'
            }
          >
            {showMenu &&
              data?.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <ResponsiveMenuItem
                      menuItem={el}
                      setShowMenu={setShowMenu}
                    />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <a
            className={
              isDark ? 'header--action-button dark' : 'header--action-button'
            }
            href="https://calendly.com/kalina-t/30min"
            target="_blank"
          >
            GET STARTED
          </a>
          <img
            className={'header--menu-icon'}
            src={BurgerMenu}
            onClick={() => toggleMenu()}
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
}
