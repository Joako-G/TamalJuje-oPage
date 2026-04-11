import styles from './MenuHeader.module.css'

export function MenuHeader() {
    return (
        <div className='container'>
            <div>
                <h1>Sabores caceros todos los días</h1>
                <p className="text-secondary">
                    Entre semana disfrutá platos variados como milanesas, albóndigas en salsa o pastel de papa.
                    Los fines de semana podés elegir entre <strong>nuestros clásicos</strong>: tamales, ñoquis, picantes y carnes al horno.
                    Incluye sopa y pan… ¡pero se agota rápido!
                </p>
            </div>
            <div className='mt-5'>
                <h2 className="fw-bold fs-1 text-center mb-3">
                    <span style={{ color: '#ff9f4a' }}> Nuestro </span>{' '}
                    <span> Menú </span>
                    <div className={styles.border} />
                </h2>

                <p className="text-center text-secondary small mb-1">
                    Todos los platos incluyen sopa y pan*
                </p>
                <p className="text-center text-secondary small opacity-75 mb-4">
                    *Excepto tamales y empanadas. Traer recipiente para la sopa.
                </p>
            </div>
        </div>
    )
}