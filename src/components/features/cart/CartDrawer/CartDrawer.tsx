import { useCartStore } from "../../../../store/useCartStore"
import { CartItem } from "../CartItem/CartItem"
import { WhatsAppButton } from "../WhatsAppButton/WhatsAppButton"
import styles from './CartDrawer.module.css'

export function CartDrawer() {
    const { cart, updateQuantity, getTotalItem } = useCartStore()
    const totalItem = getTotalItem()

    const subsAmount = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        updateQuantity(id, - 1)
    }

    const addAmount = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        updateQuantity(id, 1)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className={`d-flex flex-column align-items-center justify-content-center p-3 ${styles.bgCart}`}>
            {
                totalItem > 0 ? cart.map((item) => (
                    <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} subsAmount={subsAmount} addAmount={addAmount} />
                )) : <p>No hay pedidos</p>
            }
            <WhatsAppButton />
        </div>
    )
}