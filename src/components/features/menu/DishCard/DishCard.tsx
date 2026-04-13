import type { IDish } from '../../../../interfaces/IDish'
import { useCartStore } from '../../../../store/useCartStore';
import styles from './DishCard.module.css'

interface DishCardProps {
    dish: IDish;
}

export function DishCard({ dish }: DishCardProps) {
    const { addToCart } = useCartStore()
    const { name, price, image, description } = dish
    const dishImageSrc = image ? `/images/${image}` : '/images/logo.jpeg'


    return (
        <div className={`card d-flex flex-column gap-1 p-0  ${styles.dish}`}>
            <img className={`${styles.image}`} src={dishImageSrc} alt={name} loading='lazy' />
            <div className="card-body p-4 d-flex flex-column">
                <div className={`d-flex flex-wrap justify-content-between align-items-center ${styles.titleContainer}`}>
                    <h1 className={`card-title text-white fw-bold fs-3 m-0 flex-grow-1 ${styles.title}`}> {name} </h1>
                    <span className={`${styles.price}`}> $ {price.toLocaleString('es-AR')} </span>
                </div>
                <p className={`card-text mt-4 ${styles.text}`}> {description} </p>
                <button
                    onClick={() => addToCart(dish)}
                    type="button"
                    className={`btn btn-primary d-flex justify-content-center align-items-center w-100 p-3 gap-2 rounded-pill text-black fw-bold mt-auto ${styles.orderBtn}`}>
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Agregar pedido
                </button>
            </div>
        </div>
    )
}