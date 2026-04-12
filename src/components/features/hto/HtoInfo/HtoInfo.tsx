import { LocationSvg } from "../../../icons/LocationSvg";
import { MessageSvg } from "../../../icons/MessageSvg";
import styles from './HtoInfo.module.css'


export function HtoInfo() {
    return (
        <div className="container-fluid p-0">
            <div className="d-lg-flex gap-5 justify-content-center align-items-start">
                <div className={`d-flex justify-content-center align-items-end pb-5 rounded-4 w-100 ${styles.bg}`} >
                    <div className={`p-4 w-75 rounded-4 ${styles.containerInfo}`}>
                        <div className='d-flex align-items-center'>
                            <LocationSvg />
                            <h4 className={styles.location}>Visita el local</h4>
                        </div>
                        <h2>Alto Comedero</h2>
                        <p>Av. Carlos Snopek N° 1233</p>
                        <p>Sector B2</p>
                    </div>
                </div>


                <div>
                    <button className={`my-5 mt-lg-0 d-flex flex-column align-items-start text-start rounded-4 p-4 w-100 ${styles.card} ${styles.wp}`}>
                        <MessageSvg />
                        <h2 className='fw-bold'>Ordenar por WhatsApp</h2>
                        <p>
                            Realizá tu pedido en segundos.
                            Confirmamos disponibilidad antes de preparar.
                        </p>
                        {/* <p>⚠️ Puede requerirse pago previo por transferencia.</p> */}
                    </button>

                    <div className={`p-4 w-100 rounded-4 ${styles.card}`}>
                        <h3>Horarios de atención</h3>

                        <p className='mb-3'>🕑 Todos los días</p>
                        <p className='mb-0'>9:00 a 16:00 hs</p>
                        <small className='text-secondary'>Hasta agotar stock</small>
                    </div>
                </div>

            </div>
        </div>
    )
}