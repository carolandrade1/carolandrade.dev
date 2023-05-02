import Link from "next/link"
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
    href="/"
    aria-label="Link to home"
    title="Home"
    className="flex items-center gap-x-1"
    >
      <Image
        priority
        src="/logo.png"
        alt="cube with the letter c on the front"
        width={35}
        height={35} />
    </Link>
  )
};
