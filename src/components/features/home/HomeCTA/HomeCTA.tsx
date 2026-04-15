// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './HomeCTA.module.css'

export function HomeCTA() {
    return (
        <section id='cta' className='container pt-5'>
            <div className='row row-cols-1 row-cols-md-2 align-items-center'>

                <div className={`col-10 col-lg-7 m-auto position-relative card border-0 rounded-5 ${styles.cardSpecial}`}>
                    <div className={`card-img-overlay d-flex flex-column align-items-center justify-content-center text-center bg-dark bg-opacity-50 ${styles.cardBody}`}>
                        <div className={`d-flex flex-column text-start position-absolute p-3 rounded-4 ${styles.specialCard}`}>
                            <span className='text-warning'>EL MÁS PEDIDO</span>
                            <h4>Tamal</h4>
                            <p className={`m-0 ${styles.price}`}>$2.000 C/U</p>
                        </div>
                    </div>
                </div>

                <div className='col-lg-5 gap-3 ps-5 mt-5 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className={`${styles.title}`}>SABOR AUTÉNTICO</h3>
                    <h1 className='display-1 fs-1 fw-bold'>Masa de maíz criollo, pasión casera y listo para retirar.</h1>
                    <p className='text-secondary'>
                        Nuestros famosos tamales de maíz criollo son el corazón de la casa. Pero nuestra pasión no termina ahí: todos
                        los días cocinamos una variedad de platos regionales frescos —desde humitas hasta especialidades del día—
                        siempre con ingredientes locales. Cocinamos lotes limitados para asegurar la máxima calidad; reservá tu plato
                        favorito por WhatsApp antes de que se agoten. ¡A las 16:00 hs volamos!
                    </p>
                    <Link to='/menu' type='button' className={`btn ${styles.btnOurMenu}`}>
                        Nuestro menú
                    </Link>
                </div>
            </div>
        </section>
    )
}
