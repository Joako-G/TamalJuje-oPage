export interface IDish {
    id: number,
    name: string,
    description: string,
    price: number,
    enabled: boolean,
    image_url: string,
    menu_day: string,
    // Optional default sides (guarniciones) for the dish
    sides?: { id: number; name: string }[],
    allows_extra_side?: boolean;
}