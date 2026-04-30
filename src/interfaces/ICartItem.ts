import type { IDish } from "./IDish";

export interface ICartItem extends IDish {
    quantity: number;
    selectedSides: string[];
    wantsExtraSide?: boolean;
}