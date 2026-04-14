import { Link } from 'react-router-dom'
import { SendSvg } from '../../../icons/SendSvg'
import styles from './HomeHero.module.css'


export function HomeHero() {
    return (
        <header className={`container-fluid py-5 ${styles.containerBg}`}>
            <div className='container'>
                <div className='row mt-5 g-4'>
                    <h1 className="display-1 fw-bold">Comidas para llevar</h1>

                    <div className='col-12 col-md-6 col-lg-4'>
                        <Link to='/menu' type="button" className={`w-100 d-flex justify-content-center align-items-center gap-2 fs-4 rounded-pill btn ${styles.btnOrder}`} >
                            <SendSvg />
                            <span>Pedir por WhatsApp</span>
                        </Link>
                    </div>

                    <div className='col-12 col-md-5 col-lg-3'>
                        <a href='#cta' className={`w-100 h-100 fs-4 rounded-pill btn text-white fw-bold d-flex justify-content-center align-items-center ${styles.btnMenu}`}>
                            Más información
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}