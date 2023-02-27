import 'server-only'

import { supabase } from "@/lib/supabase";
import { info } from "@/lib/info";

export async function getData() {
    const { data,error } = await supabase.from('info').select('*').order('id').eq('id', '/');

    if(error) {
      console.log(error)
    }
  
    return data ? data[0].page : info["/"];
  }