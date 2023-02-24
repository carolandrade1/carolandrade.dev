interface ButtonComponents {
    color: ButtonColor;
    text: string;
    href: string;
}

export enum ButtonColor {
    zinc = "bg-zinc-800 dark:bg-zinc-700 drop-shadow-md absolute inset-0 -z-10 w-full h-full rounded-lg origin-center group-hover:scale-110 group-hover:opacity-90 duration-200",
    darkPurple = "bg-purple-600 drop-shadow-md absolute inset-0 -z-10 w-full h-full rounded-lg origin-center group-hover:scale-110 duration-200"
}


export function ButtonBg({color, text, href}:ButtonComponents) {
    return (
      <a href={href} className="group relative inline-block px-4 py-2 text-white" target="_blank" rel="noopener noreferrer">
        <div className={`${color} ...`}></div>
        {text}
      </a>
    )
}