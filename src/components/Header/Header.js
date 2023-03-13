import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Logo from 'assets/icons/coach-logo.svg';
import LogoDarkMode from 'assets/icons/coach-logo-dark-mode.svg';
import BurgerMenu from 'assets/icons/icon-mobilemenu-hamburger.svg';
import CloseMenu from 'assets/icons/icon-mobilemenu-close.svg';

import { navigate } from 'gatsby';
import './Header.css';
import ResponsiveMenuItem from './ResponsiveMenuItem';
import * as p from '@plasmicapp/react-web';
import { classNames } from '@plasmicapp/react-web';
import buttonCaretWhitesvg from 'components/plasmic/copy_of_coach_website/images/buttonCaretWhitesvg2.svg'; // plasmic-import: ekMgwDrEmqPnVl/picture

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
            <div className="header-responsive-menu-items-container">
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
            <div
              className="header-menu-container-buttons"
              style={{ display: showMenu ? 'flex' : 'none' }}
            >
              <a
                className={
                  isDark
                    ? 'header--action-button-mobile dark'
                    : 'header--action-button-mobile'
                }
                href="https://calendly.com/kalina-t/30min"
                target="_blank"
              >
                GET STARTED
                <img
                  src={buttonCaretWhitesvg}
                  alt="next arrow"
                  style={{ width: 15, height: 15, marginLeft: 5 }}
                />
              </a>
            </div>
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
            src={showMenu ? CloseMenu : BurgerMenu}
            onClick={() => toggleMenu()}
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  );
}
