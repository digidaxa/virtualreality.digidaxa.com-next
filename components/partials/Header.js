import React from 'react';
import autoBindReact from 'auto-bind/react';

import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from './HamburgerButton';
import Navbar from './Navbar';
import DarkModeToggle from './DarkModeToggle';
import LanguageButton from './LanguageButton';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveHamburger: false,
      isDropdownOpen: false,
      isDark: false,
    };
    autoBindReact(this);
  }

  componentDidMount() {
    // console.log(props.language);
    if (localStorage.theme === 'dark') {
      this.state = {
        isActiveHamburger: false,
        isDropdownOpen: false,
        isDark: true,
      };
    }

    if (
      localStorage.theme === 'dark'
      || (!('theme' in localStorage)
        && window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if ('language' in localStorage) {
      localStorage.setItem('language', 'id');
    }

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

  onClickToggleDarkHandler = () => {
    const toggleDarkMode = document.querySelector('#toggleDarkMode');

    if (toggleDarkMode.checked) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }

    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };

  render() {
    return (
      <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4 flex items-center">
              <Link href="/" className="inline-block cursor-pointer py-6 text-lg font-bold text-primary">
                <div className="flex items-center">
                  <Image
                    src="/img/logo.webp"
                    alt="Logo Digidaxa"
                    className="mr-2 h-8"
                  />
                  {' '}
                  <span className="text-xl text-secondary">
                    Virtual Reality
                  </span>
                </div>
              </Link>
              <LanguageButton
                language={this.props.language}
                onClickLanguage={this.props.onClickLanguage}
              />
            </div>
            <div className="flex items-center justify-center px-4 lg:flex-row-reverse">
              <DarkModeToggle
                isDark={this.state.isDark}
                onClickToggleDark={this.onClickToggleDarkHandler}
              />
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
