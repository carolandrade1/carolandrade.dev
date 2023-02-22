import { ProjectGallery } from "@/components/projects";
import Image from "next/image";
import { info } from "../lib/info";

export default function Home() {
  return (
    <>
    <section className="mb-20">
      <div className="mb-5">
        <Image
          src={info.photoUrl}
          alt={info.photoAlt}
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{info.h1}</h1>
        <p className="mb-5 text-gray-500 dark:text-gray-400">{info.description}</p>
        <p className="leading-8 max-w-xl">{info.paragr00}</p>
      </div>
    </section>
    <section className="mb-16">
      <div>
        <h2 className="text-xl font-bold">{info.h2}</h2>
        <p className="mb-5">{info.paragr01}</p>
      </div>
      <ProjectGallery />
    </section>
    </>
  )
}
