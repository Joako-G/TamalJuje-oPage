import { BagSvg } from "../../../icons/BagSvg";
import { LocationSvg } from "../../../icons/LocationSvg";
import { WatchSvg } from "../../../icons/WatchSvg";
import styles from './HomeInfo.module.css'

export function HomeInfo() {
    return (
        <>
            <div className={`d-flex flex-column gap-4 col-9 p-4 mt-5 rounded ${styles.card}`}>
                <LocationSvg />
                <div>
                    <h3>Ubicaion</h3>
                    <p className='mb-2'> Av. Carlos Snopek N° 1233 M 339 L2</p>
                </div>
                <div className={`w-100 mt-auto ${styles.border}`} />
                <a href="" className='mt-auto text-decoration-none'>VER DIRECCIÓN</a>
            </div>

            <div className={`d-flex flex-column gap-4 col-9 p-4 mt-5 rounded ${styles.card}`}>
                <div className='d-flex flex-column gap-4'>
                    <WatchSvg />
                    <div className='row'>
                        <h3>Horarios de atención</h3>
                        <div className='col-5'>
                            <p>Todos los dias </p>
                        </div>
                        <div className='col-7'>
                            <p>09:00 - 15:30 (Aprox)</p>
                        </div>
                    </div>
                    <div className={`w-100 mt-auto ${styles.border}`} />
                    <button type='button' className={`btn fw-bold align-items-center p-0 col-5 ${styles.btnOrderNow}`}> PEDIR AHORA</button>
                </div>
            </div>

            <div className={`d-flex flex-column gap-4 col-9 p-4 mt-5 rounded ${styles.card} ${styles.cardDelivery}`}>
                <div className='d-flex flex-column gap-4 '>
                    <BagSvg />
                    <div>
                        <h3>Solo para recoger</h3>
                        <p>Todos los pedidos se retiran en el local. No contamos con delivery</p>
                    </div>
                    <div className={`w-100 mt-auto ${styles.border}`} />
                    <h6>SIN DELIVERY POR EL MOMENTO</h6>
                </div>
            </div>
        </>

    )
}