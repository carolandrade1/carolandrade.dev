import Link from "next/link"
import { LogoIcon } from "./icons";

export const Logo = () => {
  return (
    <Link
    href="/"
    aria-label="Logo Carol Andrade"
    title="Home"
    >
      <div>
        <LogoIcon />
      </div>
    </Link>
  )
};
