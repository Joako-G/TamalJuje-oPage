import { create } from "zustand";
import type { ICartItem } from "../interfaces/ICartItem";
import type { IDish } from "../interfaces/IDish";
import { persist } from "zustand/middleware";

interface CartState {
    cart: ICartItem[];
    isOpen: boolean;
    error: string | null;
    addToCart: (dish: IDish) => void;
    removeToCart: (id: number) => void
    updateQuantity: (id: number, amount: number) => void;
    toggleCart: () => void;
    getTotalPrice: () => number,
    getTotalItem: () => number
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            isOpen: false,
            error: null,

            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            addToCart: (dish) => {
                const currentCart = get().cart;
                const isItemCart = currentCart.find((item) => item.id === dish.id)

                if (isItemCart) {
                    // Esta en el carrito
                    set({
                        cart: currentCart.map((item) =>
                            item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                        )
                    })
                } else {
                    console.log('Entra')
                    // Agregar en caso de que el Item no se encuentre en el carrito
                    set({ cart: [...currentCart, { ...dish, quantity: 1 }] })
                }
            },

            removeToCart: (id) => set((state) => ({
                cart: state.cart.filter((item) => item.id !== id)
            })),

            updateQuantity: (id, amount) => {
                const currentCart = get().cart
                set({
                    cart: currentCart.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + amount } : item
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