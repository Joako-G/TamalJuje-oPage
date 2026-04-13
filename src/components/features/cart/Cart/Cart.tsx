import { useCartStore } from '../../../../store/useCartStore'
import { CartFloatingBar } from '../CartFloatingBar/CartFloatingBar'
import { CartDrawer } from '../CartDrawer/CartDrawer'

export function Cart() {
    const { isOpen, toggleCart } = useCartStore()

    const handleClick = () => {
        toggleCart()
    }

    return (
        <div onClick={handleClick} className={`container d-flex flex-column flex-md-column-reverse`}>
            {isOpen && <CartDrawer />}
            <CartFloatingBar />
        </div>

    )
}