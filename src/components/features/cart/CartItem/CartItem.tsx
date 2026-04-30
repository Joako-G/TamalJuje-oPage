import styles from './CartItem.module.css'

interface CartItemProps {
    cartKey: string;
    name: string;
    quantity: number;
    price: number;
    selectedSides: string[];
    wantsExtraSide?: boolean;
    subsAmount: (event: React.MouseEvent, key: string) => void;
    addAmount: (event: React.MouseEvent, key: string) => void;
}

export function CartItem({ cartKey, name, quantity, price, selectedSides, wantsExtraSide, subsAmount, addAmount }: CartItemProps) {
    const sidesText = selectedSides.length > 0 ? selectedSides.join(', ') : '';
    const extraSideText = wantsExtraSide ? ' + Chuño' : '';
    const fullSidesText = (sidesText || extraSideText) ? `${sidesText}${extraSideText}` : null;

    return (
        <div className={styles.cartItem}>
            <div className={styles.itemInfo}>
                <span className={styles.itemName}>{name}</span>
                {fullSidesText && (
                    <small className={styles.sidesInfo}>{fullSidesText}</small>
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