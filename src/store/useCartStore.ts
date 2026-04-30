import { create } from "zustand";
import type { ICartItem } from "../interfaces/ICartItem";
import type { IDish } from "../interfaces/IDish";
import { persist } from "zustand/middleware";

interface CartState {
    cart: ICartItem[];
    isOpen: boolean;
    error: string | null;
    addToCart: (dish: IDish, selectedSides?: string[]) => void;
    removeToCart: (cartKey: string) => void
    updateQuantity: (cartKey: string, amount: number) => void;
    toggleCart: () => void;
    getTotalPrice: () => number,
    getTotalItem: () => number
}

/** Generate a unique key for a cart item based on dish id + sorted sides */
function cartKey(dishId: number, sides: string[]): string {
    const sortedSides = [...sides].sort().join('|');
    return `${dishId}::${sortedSides}`;
}

export function getCartKey(item: ICartItem): string {
    return cartKey(item.id, item.selectedSides);
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            isOpen: false,
            error: null,

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            addToCart: (dish, selectedSides) => {
                const sides = selectedSides ?? dish.sides?.map(s => s.name) ?? [];
                const key = cartKey(dish.id, sides);
                const currentCart = get().cart;
                const existingItem = currentCart.find(item => cartKey(item.id, item.selectedSides) === key);

                if (existingItem) {
                    // Already in the cart with same sides — increment quantity
                    set({
                        cart: currentCart.map((item) =>
                            cartKey(item.id, item.selectedSides) === key
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                    })
                } else {
                    // New item (or same dish with different sides)
                    set({ cart: [...currentCart, { ...dish, quantity: 1, selectedSides: sides }] })
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