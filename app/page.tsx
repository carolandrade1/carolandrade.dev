import { IntroductionSection } from "@/components/introduction";
import { ProjectSection } from "@/components/projects";
import { supabase } from "@/lib/supabase";
import { info } from "@/lib/info";

export const revalidate = 60;

async function getData() {
  const { data } = await supabase.from('info').select().eq('id', '/');

  return data ? data[0].page : info["/"];
}

export default async function Home() {
  const data = await getData();
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
