import { IntroductionSection } from "@/components/introduction";
import { ProjectSection } from "@/components/projects";
import { getData } from "@/lib/fetchsupabase";
import { info } from "@/lib/info";

export const revalidate = 60;

export default async function Home() {
  let data

  try {
    data = await getData();
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      {/* <div className="z-[-1] pointer-events-none absolute top-0 left-0 h-52 w-full">
          <div className="content h-full">
            <div className="bg-gradient-to-b from-violet-500/60 w-full h-full"></div>
          </div>
      </div> */}
      <IntroductionSection data={data} />
      <ProjectSection data={data}/>
    </>
  );
}
