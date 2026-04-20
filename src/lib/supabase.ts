import { createBrowserClient } from "@supabase/ssr";
//forma mamona de hacer una funcion, es lo msimo que una delcaracion
//normal de una funcion, pero con una sintaxis mas moderna y concisa

// esto es un factory function
//Una factory function (función fábrica) es cualquier función, que no sea una clase o constructor, que devuelve un nuevo objeto.
export const createClient = () => 
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );