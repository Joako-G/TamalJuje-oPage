import type { IDish } from "../interfaces/IDish";
import { supabase } from "../lib/supabase";

export async function getDishes(): Promise<IDish[]> {
    const { data, error } = await supabase.from('dishes').select('*').order('price', { ascending: true });

    if (error) throw error

    return data as IDish[];
}