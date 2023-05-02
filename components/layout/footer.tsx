import { GithubIcon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="flex justify-between border-t-[1px] pt-4 dark:border-gray-700">
      <div className="flex items-center text-gray-700 dark:text-gray-400 md:text-base gap-1">
        <span className="text-sm"> ©{new Date().getFullYear()} | </span>
        <a
          href="https://github.com/carolandrade1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile of Carol Andrade"
          title="Github Profile - Carol Andrade"
          className="flex items-center gap-1 text-sm"
        >
          Carol Andrade
        </a>
      </div>
      <div>
        <a
          href="https://github.com/carolandrade1/carolandrade.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Source code of this portfolio"
          title="Source code of this portfolio"
          className="flex justify-between gap-1 items-center p-1 rounded-lg text-gray-700 dark:text-gray-400 text-sm"
        >
          <GithubIcon />
          <span>Source</span>
        </a>
      </div>
    </footer>
  );
}
