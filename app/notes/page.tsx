import {createClient} from "@/utils/supabase/server";

export default async function page() {
    const supabase = createClient()
    const {data} = await supabase.from('notes').select('title')
    console.log(data)

    return <pre>{JSON.stringify(data, null, 2)}</pre>
}