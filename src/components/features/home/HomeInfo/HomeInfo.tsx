import { BagSvg } from "../../../icons/BagSvg";
import { LocationSvg } from "../../../icons/LocationSvg";
import { WatchSvg } from "../../../icons/WatchSvg";
import styles from './HomeInfo.module.css'

export function HomeInfo() {
    return (
        <div className="container w-md-100 my-5 px-5">
            <div className="row row-cols-1 row-cols-md-3 g-5">

                <div className={`col`}>
                    <div className={`card h-100 border-0 ${styles.card}`}>
                        <div className="card-body d-flex flex-column text-white  gap-5">
                            <LocationSvg />
                            <div className="mb-auto">
                                <h3>Ubicaión</h3>
                                <p className='mb-2'> Av. Carlos Snopek N° 1233 M 339 L2</p>
                            </div>
                            <div className={styles.border} />
                            <a href="" className='text-decoration-none'>VER DIRECCIÓN</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className={`card h-100 border-0 ${styles.card}`}>
                        <div className='card-body d-flex flex-column text-white  gap-5'>
                            <WatchSvg />
                            <div className='row mb-auto'>
                                <h3>Horarios de atención</h3>
                                <div className='col-5'>
                                    <p>Todos los dias </p>
                                </div>
                                <div className='col-7'>
                                    <p>09:00 - 15:30 (Aprox)</p>
                                </div>
                            </div>
                            <div className={`${styles.border}`} />
                            <button type='button' className={`btn d-block fw-bold text-start p-0 ${styles.btnOrderNow}`}> PEDIR AHORA</button>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className={`card h-100 ${styles.card} ${styles.cardDelivery}`}>
                        <div className='card-body d-flex flex-column gap-5 '>
                            <BagSvg />
                            <div className="mb-auto">
                                <h3>Solo para recoger</h3>
                                <p>Todos los pedidos se retiran en el local. No contamos con delivery</p>
                            </div>
                            <div className={`${styles.border}`} />
                            <h6>SIN DELIVERY</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}