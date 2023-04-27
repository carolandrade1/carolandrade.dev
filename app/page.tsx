import { supabase } from "@/lib/supabase";
import { info } from "@/lib/info";
import { IntroductionSection } from "@/components/sections/introduction";
import { ProjectSection } from "@/components/sections/projects";
import { LibrarySection } from "@/components/sections/library";

async function getData() {
  const { data } = await supabase.from('info').select().eq('id', '/');

  return data ? data[0].page : info["/"];
}

export const revalidate = 60;
export const dynamic = 'force-dynamic';

export default async function Home() {
  let data
  
  try {
    data = await getData();
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <IntroductionSection data={data} />
      <ProjectSection data={data}/>
      <LibrarySection data={data}/>
    </>
  );
}
