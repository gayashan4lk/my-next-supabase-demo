import { createClient } from '@/utils/supabase/server'

export default async function page() {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()
  const { data: posts } = await supabase.from('posts').select()
  console.log(notes)
  console.log(posts)

  return (
    <>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <div>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </>
  )
}
