'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './logo';

const navLinks = {
    '/': {
        name: 'home'
    },
    '/about': {
        name: 'about'
    },
    '/projects': {
        name: 'projects'
    },
    '/guestbook': {
        name: 'guestbook'
    },
};



function Navbar() {
    let pathname = usePathname(); 

  return (
    <header className="flex flex-col sticky top-0 md:flex-row justify-between">
        <Logo />
        <nav id="navigation">
            <ul role="list" className="flex">
                    
                    {Object.entries(navLinks).map(([path, { name }]) => {
                        const isActive = path === pathname;

                        return (
                            <li key={path} className="relative rounded-xl overflow-hidden ">
                                <>
                                    {isActive && <span className="sr-only">Current page: </span>}
                                    <Link
                                    {...(isActive ? {"aria-current":"page"} : {})}
                                    href={path}
                                    className={clsx(
                                        "relative flex justify-center items-center transition-all hover:text-white dark:hover:text-neutral-200 py-[5px] px-[10px]", {
                                            'text-neutral-500': !isActive,
                                            'navLinkActive': isActive,
                                        }
                                    )}                       
                                    >
                                        {name}
                                    </Link>
                                </>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    </header>
  )
}


export default Navbar;
