'use client';

import { Logo } from './logo';
import { ToggleTheme } from '@/components/layout/header/toggleTheme';


export const Navbar = () => {

  return (
    <header className="flex justify-between items-center mb-24 md:mb-[10.3rem] md:border-b dark:border-gray-700 pb-4">
        <Logo />
        <ToggleTheme />
    </header>
  )
};
