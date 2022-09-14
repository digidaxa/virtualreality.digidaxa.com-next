import React from 'react';
import autoBindReact from 'auto-bind/react';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import HamburgerButton from './HamburgerButton';
import Navbar from './Navbar';

import LanguageButton from './LanguageButton';

const DarkModeToggle = dynamic(() => import('./DarkModeToggle'), { ssr: false });

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveHamburger: false,
      isDropdownOpen: false,
    };
    autoBindReact(this);
  }

  componentDidMount() {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const backtotop = document.querySelector('#backtotop');
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        backtotop.classList.remove('hidden');
        backtotop.classList.add('flex');
      } else {
        header.classList.remove('navbar-fixed');
        backtotop.classList.remove('flex');
        backtotop.classList.add('hidden');
      }
    };
  }

  onClickHamburgerHandler = () => {
    this.setState((prevState) => ({
      isActiveHamburger: !prevState.isActiveHamburger,
    }));
  };

  onClickDropdownHandler = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  onClickDropdownLinkHandler = () => {
    this.setState({
      isDropdownOpen: false,
    });
  };

  render() {
    return (
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4 flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer py-6 text-lg font-bold text-primary">
                  <picture>
                    <source srcSet="/img/logo.webp" type="image/webp" />
                    <img
                      src="/img/logo.webp"
                      alt="Logo Digidaxa"
                      className="mr-2 h-8 w-8"
                    />
                  </picture>
                  {' '}
                  <span className="text-xl text-secondary">
                    Virtual Reality
                  </span>
                </div>
              </Link>
              <LanguageButton />
            </div>
            <div className="flex items-center justify-center px-4 lg:flex-row-reverse">
              <DarkModeToggle />
              <HamburgerButton
                isActiveHamburger={this.state.isActiveHamburger}
                onClickHamburger={this.onClickHamburgerHandler}
              />
              <Navbar
                onClickDropdown={this.onClickDropdownHandler}
                onClickDropdownLink={this.onClickDropdownLinkHandler}
                isActiveHamburger={this.state.isActiveHamburger}
                isDropdownOpen={this.state.isDropdownOpen}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
