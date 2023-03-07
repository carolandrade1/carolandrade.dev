'use client';

import { Logo } from './logo';
import { ToggleTheme } from './toggleTheme';


export const Navbar = () => {

  return (
    <header className="flex justify-between items-center mb-24 md:mb-[10.3rem]">
        <Logo />
        <ToggleTheme />
    </header>
  )
};
