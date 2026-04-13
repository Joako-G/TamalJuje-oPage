import { useEffect, useState } from "react";
import { useCartStore } from "../../../../store/useCartStore";
import { BagOrderSvg } from "../../../icons/BagOrderSvg";
import styles from './CartFloatingBar.module.css'

export function CartFloatingBar() {
    const { cart, getTotalPrice, getTotalItem } = useCartStore()
    const [total, setTotal] = useState<number>(getTotalPrice())
    const [totalItem, setTotalItem] = useState<number>(getTotalItem())

    useEffect(() => {
        setTotal(getTotalPrice())
        setTotalItem(getTotalItem())
    }, [cart])

    return (
        <div className={`d-flex gap-5 gap-md-0 px-4 align-items-center mb-5 mb-md-0 rounded-pill ${styles.bgCart}`}>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
                <div className='d-flex position-relative'>
                    <BagOrderSvg />
                    <span className={`text-black text-center rounded-circle ${styles.totalItem}`}> {totalItem} </span>
                </div>
                <span className={`text-start ${styles.order}`}>Orden</span>
            </div>

            <span className='m-auto'> ${(total).toLocaleString('es-AR')} </span>
        </div>
    )
}