import { info } from "@/lib/info";
import { IntroductionSection } from "@/components/sections/introduction";
import { ProjectSection } from "@/components/sections/projects";
import { LibrarySection } from "@/components/sections/library";

export default async function Home() {
  const data = info["/"];

  return (
    <>
      <IntroductionSection data={data} />
      <ProjectSection data={data}/>
      <LibrarySection data={data}/>
    </>
  );
}
