import type { IDish } from "../interfaces/IDish";
import { supabase } from "../lib/supabase";
import type { ISide } from "./sidesService";

export async function getDishes(): Promise<IDish[]> {
    const { data: dishesData, error: dishesError } = await supabase
        .from('dishes')
        .select('*')
        .order('price', { ascending: true });

    if (dishesError) throw dishesError;

    const dishes = (dishesData ?? []) as IDish[];

    // Fetch default dish_sides (is_default = true)
    const { data: dsData, error: dsError } = await supabase
        .from('dish_sides')
        .select('id, dish_id, side_id')
        .eq('is_default', true);

    if (dsError) throw dsError;

    const dishSides = (dsData ?? []) as { id: number; dish_id: number; side_id: number }[];

    if (dishSides.length === 0) return dishes.map(d => ({ ...d, sides: [] }));

    const sideIds = Array.from(new Set(dishSides.map(ds => ds.side_id)));

    const { data: sidesData, error: sidesError } = await supabase
        .from('sides')
        .select('id, name, is_available')
        .in('id', sideIds)
        .eq('is_available', true)
        .neq('name', 'Chuño');

    if (sidesError) throw sidesError;

    const sides = (sidesData ?? []) as ISide[];

    const sideById = new Map<number, ISide>();
    sides.forEach(s => sideById.set(s.id, s));

    const sidesByDish = new Map<number, ISide[]>();
    for (const ds of dishSides) {
        const side = sideById.get(ds.side_id);
        if (!side) continue;
        const arr = sidesByDish.get(ds.dish_id) ?? [];
        arr.push(side);
        sidesByDish.set(ds.dish_id, arr);
    }

    return dishes.map(d => ({ ...d, sides: sidesByDish.get(d.id) ?? [] }));
}