import { useCartStore, getCartKey } from "../../../../store/useCartStore"
import { CartItem } from "../CartItem/CartItem"
import { WhatsAppButton } from "../WhatsAppButton/WhatsAppButton"
import styles from './CartDrawer.module.css'

export function CartDrawer() {
    const { cart, updateQuantity, getTotalItem, getTotalPrice } = useCartStore()
    const totalItem = getTotalItem()

    const subsAmount = (event: React.MouseEvent, key: string) => {
        event.stopPropagation()
        updateQuantity(key, - 1)
    }

    const addAmount = (event: React.MouseEvent, key: string) => {
        event.stopPropagation()
        updateQuantity(key, 1)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={`d-flex flex-column align-items-center p-3 gap-2 ${styles.bgCart}`}>
            <h2 className={styles.cartTitle}>Tu pedido</h2>
            <div className={`d-flex gap-1 flex-column align-items-center w-100 ${styles.cartScrollArea}`}>
                {
                    totalItem > 0 ? cart.map((item) => {
                        const key = getCartKey(item);
                        return (
                            <CartItem
                                key={key}
                                cartKey={key}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                selectedSides={item.selectedSides}
                                subsAmount={subsAmount}
                                addAmount={addAmount}
                            />
                        );
                    }) : <p className={styles.emptyMsg}>No hay platos en tu pedido</p>
                }
            </div>
            {totalItem > 0 && (
                <div className="d-flex justify-content-between w-100 px-1 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: '#999', fontSize: '0.85rem' }}>Total</span>
                    <span style={{ color: 'var(--text-special)', fontWeight: 700, fontSize: '1.05rem' }}>
                        ${getTotalPrice().toLocaleString('es-AR')}
                    </span>
                </div>
            )}
            <WhatsAppButton />
        </div>
    )
}