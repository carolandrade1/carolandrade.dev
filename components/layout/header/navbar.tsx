'use client';


import { ToggleTheme } from '@/hooks/toggleTheme';
import { Logo } from './logo';


export const Navbar = () => {

  return (
    <header className="flex justify-between items-center mb-28">
        <Logo />
        <ToggleTheme />
    </header>
  )
};
