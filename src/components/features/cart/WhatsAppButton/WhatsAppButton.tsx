import { useCartStore } from '../../../../store/useCartStore'
import styles from './WhatsAppButton.module.css'

export function WhatsAppButton() {
    const { cart, getTotalPrice } = useCartStore()
    const isEnabled = cart.length > 0

    const handleSendOrder = () => {
        const myNumber = "93884095206"

        // FORMATEAR LA LISTA DE PRODUCTOS
        const itemsText = cart.map((item) =>
            `-  ${item.name} x ${item.quantity} ($${(item.price * item.quantity).toLocaleString('es-AR')})`)
            .join(`\n`)

        // CREAR EL MENSAJE
        const message = `¡Hola! Quisiera realizar un pedido:\n\n${itemsText}\n\n*Total: ${getTotalPrice().toLocaleString('es-AR')}*\n\nNombre: \nApellido: \n(Por favor complete sus datos arriba)`

        //CODIFICAR EL MENSAJE
        const encodedMessage = encodeURIComponent(message)

        window.open(`https://wa.me/${myNumber}?text=${encodedMessage}`, "_blanl")
    }

    return (
        <button
            disabled={!isEnabled}
            onClick={handleSendOrder}
            type="button"
            className={`btn fw-bold w-100 ${styles.btnSend}`}>
            Confirmar pedido
        </button>
    )
}