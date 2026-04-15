import { BagOrderSvg } from '../../icons/BagOrderSvg'
import { KnifeSvg } from '../../icons/KnifeSvg'
import { LocationSvg } from '../../icons/LocationSvg'
import { MessageSvg } from '../../icons/MessageSvg'
import { SendSvg } from '../../icons/SendSvg'
import { TouchSvg } from '../../icons/TouchSvg'
import styles from './HowToOrder.module.css'

export function HowToOrder() {
    return (
        <>
            <div className='text-start' style={{ maxWidth: '400px' }}>
                <h1>Como hacer tu pedido</h1>
                <p>Elegí tus platos, hacé tu pedido por WhatsApp y retiralo en el local. Rápido, simple y sin esperas.</p>
            </div>

            <div className='d-flex flex-column align-items-center gap-5 w-100'>
                <div className={`d-flex flex-column gap-3 p-4 rounded-3 w-100 ${styles.card}`}>

                    <h1 className={`d-flex justify-content-center align-items-center rounded-circle ${styles.step}`}> 1 </h1>

                    <h3 className='fw-bold'> Elegí tu comida </h3>

                    <p className='text-secondary'> Explorá nuestro menú y seleccioná los platos que quieras pedir. </p>

                    <div className='text-end'>
                        <KnifeSvg />
                    </div>

                </div>

                <div className={`d-flex flex-column gap-3 p-4 rounded-3 ${styles.card}`}>

                    <h1 className={`d-flex justify-content-center align-items-center rounded-circle ${styles.step}`}> 2 </h1>

                    <h3 className='fw-bold'> Hacé tu pedido por WhatsApp </h3>

                    <p className='text-secondary'> Tocá el botón en cualquier plato para comenzar tu pedido. </p>

                    <div className='text-end'>
                        <TouchSvg />
                    </div>

                </div>

                <div className={`d-flex flex-column gap-3 p-4 rounded-3 ${styles.card}`}>

                    <h1 className={`d-flex justify-content-center align-items-center rounded-circle ${styles.step}`}> 3 </h1>

                    <h3 className='fw-bold'> Confirmá tu pedido </h3>

                    <p className='text-secondary'>
                        Enviá tu pedido por WhatsApp y aguardá confirmación.
                        Puede requerirse pago previo por transferencia.
                    </p>

                    <div className={`text-end mt-5 w-100 ${styles.send}`}>
                        <SendSvg />
                    </div>

                </div>

                <div className={`d-flex flex-column gap-3 p-4 rounded-3 ${styles.card}`}>

                    <h1 className={`d-flex justify-content-center align-items-center rounded-circle ${styles.step}`}> 4 </h1>

                    <h3 className='fw-bold'> Retirá en el local </h3>

                    <p className='text-secondary'>
                        Pasá a buscar tu pedido en el horario acordado.
                        Tu comida estará lista para retirar.
                    </p>

                    <div className='text-end'>
                        <BagOrderSvg />
                    </div>

                </div>
            </div>

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

            <button className={`d-flex flex-column align-items-start text-start rounded-4 p-4 w-100 ${styles.card} ${styles.wp}`}>
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

        </ >
    )
}