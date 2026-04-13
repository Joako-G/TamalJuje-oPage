import styles from './CartItem.module.css'

interface CartItemProps {
    id: number;
    name: string;
    quantity: number;
    price: number;
    subsAmount: (event: React.MouseEvent, id: number) => void;
    addAmount: (event: React.MouseEvent, id: number) => void;
}

export function CartItem({ id, name, quantity, price, subsAmount, addAmount }: CartItemProps) {

    return (
        <div className='row row-cols-3 mb-3 justify-content-center align-items-center w-100'>
            <span className='p-0 col-3 col-md-4'> {name} </span>
            <div className='col-5 col-md-5 d-flex gap-3 gap-md-2 align-items-center'>
                <button onClick={(event) => subsAmount(event, id)} type='button' className={`btn p-1 w-100 ${styles.amountBtn}`}>-</button>
                <span> {quantity} </span>
                <button onClick={(event) => addAmount(event, id)} type='button' className={`btn p-1 w-100 ${styles.amountBtn}`}>+</button>
            </div>
            <span className='col-3'> ${(price * quantity).toLocaleString('es-AR')} </span>
        </div>
    )
}