import { GithubIcon, LinkedinIcon } from '@/components/icons';

export const Footer = () => {
    return (
        <footer className="flex justify-between items-end">
        <div className="flex flex-col">
            ©{new Date().getFullYear()} | Carol Andrade
        </div>
        <address className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/carolandrade1/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://github.com/carolandrade1" title="Github" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            <span className="sr-only">GitHub</span>
          </a>
        </address>
      </footer>
    )
};
