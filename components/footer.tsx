import { GithubIcon, LinkedinIcon } from '@/components/icons';

export const Footer = () => {
    return (
        <footer className="flex justify-center">
          <div className="flex flex-col text-sm">
              ©{new Date().getFullYear()} | Carol Andrade
          </div>
      </footer>
    )
};
