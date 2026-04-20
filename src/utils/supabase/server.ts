import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    //este es un objeto de javascript (similar a json)
    {
      cookies: {
        // get all y set all deben ser llanadas de acuerdo a la documentacion de supabase
        //y cookies tambien esta dfinicio en la documentacion de supabase
        // en todo este rollo  solo definimos los metodos para que supabase pueda usar las cookies de nextjs, es decir, es una especie de adaptador para que supabase pueda usar las cookies de nextjs
        
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // El middleware se encargará si esto falla en un Server Component
          }
        },
      },
    }
  )
}