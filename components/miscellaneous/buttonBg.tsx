import { ButtonBgComponents } from "@/types/types";

export function ButtonBg({color, text, href}:ButtonBgComponents) {
    return (
      <a href={href} className="group relative inline-block px-4 py-2 text-white dark:text-black" target="_blank" rel="noopener noreferrer">
        <div className={`${color} ... btnBackground`}></div>
        {text}
      </a>
    )
}