import React, { useState } from 'react';
import MenuItem from './MenuItem';

import Logo from 'assets/icons/coach-logo.svg';
import LogoDarkMode from 'assets/icons/coach-logo-dark-mode.svg';
import BurgerMenu from 'assets/icons/menu-burger.svg';
import { navigate } from 'gatsby';
import { Script } from 'gatsby';
import './Header.css';

import ResponsiveMenuItem from './ResponsiveMenuItem';

export function Header({ isDark, data }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    document.body.style.overflow = showMenu ? 'scroll' : 'hidden';
    setShowMenu((prevData) => !prevData);
  }

  return (
    <div>
      <div className={isDark ? 'header--wrapper dark' : 'header--wrapper'}>
        <img
          className="header--logo"
          src={isDark ? LogoDarkMode : Logo}
          onClick={() => {
            navigate('/');
            document.body.style.overflow = 'scroll';
            setShowMenu(false);
          }}
        />
        <Script
          id="first-unique-id"
          key="plasmic-hmr"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        if (typeof window !== "undefined" && /\\/plasmic-host\\/?$/.test(window.location.pathname)) {
          const RealEventSource = window.EventSource;
          window.EventSource = function(url, config) {
            if (/[^a-zA-Z]hmr($|[^a-zA-Z])/.test(url)) {
              console.warn("Plasmic: disabled EventSource request for", url);
              return {
                onerror() {}, onmessage() {}, onopen() {}, close() {}
              };
            } else {
              return new RealEventSource(url, config);
            }
          }
        }
      `,
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
        <a
          style={{ textDecoration: 'none' }}
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
                <ResponsiveMenuItem menuItem={el} setShowMenu={setShowMenu} />
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
