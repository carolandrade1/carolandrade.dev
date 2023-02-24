import Link from "next/link"

export const Logo = () => {
  return (
    <Link
    href="/"
    aria-label="Carol Andrade"
    title="Home"
    className="flex items-center gap-x-1"
    >
      <span className="pb-2 text-lg">
        🤖
      </span>
      <span>
        /
      </span>
      <h1 className="text-lg">
        Carol Andrade
      </h1>
    </Link>
  )
};
