import styles from './CartItem.module.css'

interface CartItemProps {
    cartKey: string;
    name: string;
    quantity: number;
    price: number;
    selectedSides: string[];
    subsAmount: (event: React.MouseEvent, key: string) => void;
    addAmount: (event: React.MouseEvent, key: string) => void;
}

export function CartItem({ cartKey, name, quantity, price, selectedSides, subsAmount, addAmount }: CartItemProps) {
    const sidesText = selectedSides.length > 0 ? selectedSides.join(', ') : null;

    return (
        <div className={styles.cartItem}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{name}</span>
                {sidesText && (
                    <small className={styles.sidesInfo}>{sidesText}</small>
                )}
            </div>
            <div className={styles.quantityControls}>
                <button onClick={(event) => subsAmount(event, cartKey)} type='button' className={styles.amountBtn}>−</button>
                <span className={styles.quantityNum}>{quantity}</span>
                <button onClick={(event) => addAmount(event, cartKey)} type='button' className={styles.amountBtn}>+</button>
            </div>
            <span className={styles.itemPrice}>${(price * quantity).toLocaleString('es-AR')}</span>
        </div>
    )
}