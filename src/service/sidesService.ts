import { supabase } from "../lib/supabase";

export interface ISide {
    id: number;
    name: string;
}

export async function getAllSides(): Promise<ISide[]> {
    const { data, error } = await supabase
        .from('sides')
        .select('id, name')
        .order('name', { ascending: true });

    if (error) throw error;
    return (data ?? []) as ISide[];
}
