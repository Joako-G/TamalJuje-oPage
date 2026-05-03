import { supabase } from "../lib/supabase";

export interface ISide {
    id: number;
    name: string;
    is_available: boolean;
}

export async function getAllSides(): Promise<ISide[]> {
    const { data, error } = await supabase
        .from('sides')
        .select('id, name, is_available')
        .eq('is_available', true)
        .neq('name', 'Chuño')
        .order('name', { ascending: true });

    if (error) throw error;
    return (data ?? []) as ISide[];
}
