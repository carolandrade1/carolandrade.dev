import { Button3dComponents } from "@/types/types";

export const Button3d = ({href, text}:Button3dComponents) => {
    return (
        <a href={href} aria-label={text} className="pushable group block relative w-full border-none bg-transparent p-0 cursor-pointer outline-offset-4 hover:brightness-110" target="_blank" rel="noopener noreferrer">
            <span aria-hidden="true" className="shadow absolute top-0 left-0 w-full h-full rounded-xl bg-black/25 will-change-transform translate-y-0.5 group-hover:translate-y-1 group-active:translate-y-px"></span>
            <span aria-hidden="true" className="absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-l from-purple-900 to-purple-900"></span>
            <span className="front block relative py-2.5 px-6 text-white -translate-y-1 group-hover:-translate-y-1.5 group-active:-translate-y-0.5 rounded-xl will-change-transform bg-purple-600 text-center font-medium">
                {text}
            </span>
        </a>
    )
}