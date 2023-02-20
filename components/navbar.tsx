'use client';

// import clsx from 'clsx';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { navLinks } from '@/lib/info';
import dynamic from 'next/dynamic';
import { Logo } from './logo';

const ToggleTheme = dynamic(async () => {
let myModule = await import('../components/toggleTheme')
return myModule.ToggleTheme;
}, { ssr: false });


// function LinkItem(isActive:boolean, name: string, path: string) {
//     return <>
//         {isActive && <span className="sr-only">Current page: </span>}
//         <Link
//         {...(isActive ? {"aria-current":"page"} : {})}
//         href={path}
//         className={clsx(
//             "relative flex justify-center items-center transition-all hover:text-gray-600 dark:hover:text-neutral-200 py-1 px-2.5", {
//                 'text-neutral-600': !isActive,
//                 'text-black font-bold': isActive,
//             }
//         )}                       
//         >
//             {name}
//         </Link>
//     </>
// }

export const Navbar = () => {
    // let pathname = usePathname(); 

  return (
    <header className="flex justify-between items-center mb-20">
        <Logo />

        <ToggleTheme />

        {/* <nav id="navigation" className="py-2">
            <ul role="list" className="flex justify-between">
                {Object.entries(navLinks).map(([path, { name }]) => {
                    const isActive = path === pathname;
                    return (
                        <li key={path} className="relative flex justify-center items-center rounded-xl overflow-hidden hover:shadow-md shadow-cyan-500/50">
                            {LinkItem(isActive, name, path)}
                        </li>
                    );
                })}
            </ul>
        </nav> */}
    </header>
  )
};
