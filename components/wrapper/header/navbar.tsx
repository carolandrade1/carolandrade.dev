'use client';

import dynamic from 'next/dynamic';
import { Logo } from './logo';

const ToggleTheme = dynamic(async () => {
let myModule = await import('./toggleTheme')
return myModule.ToggleTheme;
}, { ssr: false });

export const Navbar = () => {

  return (
    <header className="flex justify-between items-center mb-28">
        <Logo />
        <ToggleTheme />
    </header>
  )
};
