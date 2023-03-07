import Image from "next/image";

export function Banner() {
  return (
    <div className="z-[-1] pointer-events-none absolute top-0 left-0 h-52 md:h-72 w-full">
        <div className="content h-full">
          <div className="w-full h-full banner"></div>
        </div>
    </div>
  )
}
