interface ButtonComponents {
    color: ButtonColor;
    text: string;
    href: string;
}

export enum ButtonColor {
    zinc = "bg-zinc-800 dark:bg-zinc-700 group-hover:opacity-90",
    darkPurple = "bg-purple-600"
}


export function ButtonBg({color, text, href}:ButtonComponents) {
    return (
      <a href={href} className="group relative inline-block px-4 py-2 text-white" target="_blank" rel="noopener noreferrer">
        <div className={`${color} ... btnBackground`}></div>
        {text}
      </a>
    )
}