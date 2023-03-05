'use client';

import { Logo } from './logo';
import { ToggleTheme } from './toggleTheme';


export const Navbar = () => {

  return (
    <header className="flex justify-between items-center mb-28">
        <Logo />
        <ToggleTheme />
    </header>
  )
};
