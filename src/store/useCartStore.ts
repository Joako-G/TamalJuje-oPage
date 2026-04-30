import { create } from "zustand";
import type { ICartItem } from "../interfaces/ICartItem";
import type { IDish } from "../interfaces/IDish";
import { persist } from "zustand/middleware";

interface CartState {
    cart: ICartItem[];
    isOpen: boolean;
    error: string | null;
    addToCart: (dish: IDish, selectedSides?: string[], wantsExtraSide?: boolean) => void;
    removeToCart: (cartKey: string) => void
    updateQuantity: (cartKey: string, amount: number) => void;
    toggleCart: () => void;
    getTotalPrice: () => number,
    getTotalItem: () => number
}

/** Generate a unique key for a cart item based on dish id + sorted sides + extra side choice */
function cartKey(dishId: number, sides: string[], wantsExtraSide?: boolean): string {
    const sortedSides = [...sides].sort().join('|');
    return `${dishId}::${sortedSides}::${wantsExtraSide ? 'extra' : 'no-extra'}`;
}

export function getCartKey(item: ICartItem): string {
    return cartKey(item.id, item.selectedSides, item.wantsExtraSide);
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            isOpen: false,
            error: null,

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            addToCart: (dish, selectedSides, wantsExtraSide) => {
                const sides = selectedSides ?? dish.sides?.map(s => s.name) ?? [];
                const key = cartKey(dish.id, sides, wantsExtraSide);
                const currentCart = get().cart;
                const existingItem = currentCart.find(item => getCartKey(item) === key);

                if (existingItem) {
                    // Already in the cart with same options — increment quantity
                    set({
                        cart: currentCart.map((item) =>
                            getCartKey(item) === key
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    })
                } else {
                    // New item (different combination of sides/extra)
                    set({ cart: [...currentCart, { ...dish, quantity: 1, selectedSides: sides, wantsExtraSide }] })
                }
            },

            removeToCart: (key) => set((state) => ({
                cart: state.cart.filter((item) => getCartKey(item) !== key)
            })),

            updateQuantity: (key, amount) => {
                const currentCart = get().cart
                set({
                    cart: currentCart.map((item) =>
                        getCartKey(item) === key ? { ...item, quantity: item.quantity + amount } : item
                    ).filter((item) => item.quantity > 0)
                })
            },

            getTotalPrice: () => {
                return get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
            },

            getTotalItem: () => {
                return get().cart.length
            }

        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ cart: state.cart })
        }
    )
)