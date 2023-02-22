// https://www.joshwcomeau.com/animation/3d-button/

interface ButtonComponents {
    href: string;
    text: string;
    primaryBackground: string;
    secondaryBackground: string;
}

export const Button3d = ({href, text, primaryBackground, secondaryBackground}:ButtonComponents) => {
    return (
        <a href={href} className="pushable group block relative w-fit border-none bg-transparent p-0 cursor-pointer outline-offset-4 hover:brightness-110" target="_blank" rel="noopener noreferrer">
            <span className="shadow absolute top-0 left-0 w-full h-full rounded-xl bg-black/25 will-change-transform translate-y-0.5 group-hover:translate-y-1 group-active:translate-y-px "></span>
            <span className={`absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-l ${secondaryBackground}`}></span>
            <span className={`front block relative py-2.5 px-6 text-white -translate-y-1 group-hover:-translate-y-1.5 group-active:-translate-y-0.5 rounded-xl will-change-transform ${primaryBackground}`}>
                {text}
            </span>
        </a>
    )
}