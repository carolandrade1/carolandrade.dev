import { ButtonBgComponents } from "@/types/types";

export function ButtonBg({color, ariaText, text, href}:ButtonBgComponents) {
    return (
      <a href={href} aria-label={ariaText} className="group relative inline-block px-4 py-2 text-white dark:text-black" target="_blank" rel="noopener noreferrer">
        <div className={`${color} ... btnBackground`}></div>
        {text}
      </a>
    )
}