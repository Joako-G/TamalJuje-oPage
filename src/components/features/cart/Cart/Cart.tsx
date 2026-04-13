import { useEffect, useState } from 'react'
import { useCartStore } from '../../../../store/useCartStore'
import { BagOrderSvg } from '../../../icons/BagOrderSvg'
import styles from './Cart.module.css'
import type { ICartItem } from '../../../../interfaces/ICartItem'


export function Cart() {
    const { cart, getTotalPrice, getTotalItem, isOpen, toggleCart, addToCart, updateQuantity } = useCartStore()
    const [total, setTotal] = useState<number>(getTotalPrice())
    const [totalItem, setTotalItem] = useState<number>(getTotalItem())

    useEffect(() => {
        setTotal(getTotalPrice())
        setTotalItem(getTotalItem())
    }, [cart])

    const handleClick = () => {
        toggleCart()
    }

    const subsAmoun = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        updateQuantity(id, - 1)
    }

    const addAmount = (event: React.MouseEvent, id: number) => {
        event.stopPropagation()
        updateQuantity(id, 1)
    }



    return (
        <div onClick={handleClick} className={`container d-flex flex-column flex-md-column-reverse`}>
            {
                isOpen ?
                    totalItem ?
                        <div onClick={(e) => e.stopPropagation()} className={`p-3 p-md-1 ${styles.bgCart}`}>
                            {
                                cart.map((item) => (
                                    <div key={item.id} className='row row-cols-3 justify-content-center align-items-center'>
                                        <span className='p-3'> {item.name} </span>
                                        <div className='d-flex gap-3 gap-md-2 align-items-center justify-content-center text-center'>
                                            <button onClick={(event) => subsAmoun(event, item.id)} type='button' className={`btn p-1 w-50 ${styles.amountBtn}`}>-</button>
                                            <span> {item.quantity} </span>
                                            <button onClick={(event) => addAmount(event, item.id)} type='button' className={`btn p-1 w-50 ${styles.amountBtn}`}>+</button>
                                        </div>
                                        <span> ${(item.price * item.quantity).toLocaleString('es-AR')} </span>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div onClick={(e) => e.stopPropagation()} className={`p-4 ${styles.bgCart}`}> No hay pedidos </div>
                    :
                    <></>
            }
            <div className={`d-flex gap-5 gap-md-0 px-4 align-items-center mb-5 mb-md-0 rounded-pill w-100 ${styles.bgCart}`}>
                <div className='d-flex gap-3'>
                    <div className='d-flex position-relative'>
                        <BagOrderSvg />
                        <span className={`text-black text-center rounded-circle ${styles.totalItem}`}> {totalItem} </span>
                    </div>
                    <span className={`text-start me-auto ${styles.order}`}>Orden</span>
                </div>

                <span className='m-auto'> ${(total).toLocaleString('es-AR')} </span>
            </div>

        </div>

    )
}