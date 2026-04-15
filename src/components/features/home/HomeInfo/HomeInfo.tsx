import { Link } from "react-router-dom";
import { BagSvg } from "../../../icons/BagSvg";
import { LocationSvg } from "../../../icons/LocationSvg";
import { WatchSvg } from "../../../icons/WatchSvg";
import styles from './HomeInfo.module.css'

export function HomeInfo() {
    return (
        <div className="container w-md-100 my-5 px-5 px-md-0">
            <div className="row row-cols-1 row-cols-md-3 g-5">

                <div className={`col`}>
                    <div className={`card h-100 border-0 ${styles.card}`}>
                        <div className="card-body d-flex flex-column text-white  gap-5">
                            <LocationSvg />
                            <div className="mb-auto">
                                <h3>Ubicación</h3>
                                <p className='mb-2'> Av. Carlos Snopek N° 1233 M 339 L2</p>
                            </div>
                            <div className={styles.border} />
                            <div className="d-flex">
                                <a
                                    href="https://www.google.com/maps/place/El+Tamal+Jujue%C3%B1o/@-24.2450411,-65.2652136,18z/data=!4m10!1m2!2m1!1stamal+jujuy!3m6!1s0x941b07cc832d6087:0xf4f5aa363cee09dd!8m2!3d-24.2450476!4d-65.2628046!15sCgt0YW1hbCBqdWp1eVoNIgt0YW1hbCBqdWp1eZIBDW1lYWxfdGFrZWF3YXmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhuTlZwSVRsUk9WVlpNVTFNeGEyUnNSazlYVldSRFlsUnNhVlV3UlJBQuABAPoBBAgAED8!16s%2Fg%2F11rw7fwm9t?entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
                                    className='text-decoration-none d-flex'>
                                    VER DIRECCIÓN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className={`card h-100 border-0 ${styles.card}`}>
                        <div className='card-body d-flex flex-column text-white  gap-5'>
                            <WatchSvg />
                            <div className='row mb-auto'>
                                <h3>Horarios de atención</h3>
                                <p className="mb-2">Todos los dias </p>
                                <p>09:00 - 15:30 (Aprox)</p>
                            </div>
                            <div className={`${styles.border}`} />
                            <div className="d-flex">
                                <Link
                                    to='/menu'
                                    type='button'
                                    className={`btn d-block fw-bold text-start p-0 ${styles.btnOrderNow}`}
                                >
                                    PEDIR AHORA
                                </Link>
                            </div>
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