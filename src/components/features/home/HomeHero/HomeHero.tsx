import styles from './HomeHero.module.css'

export function HomeHero() {
    return (
        <header className={`container-fluid p-4 ${styles.containerBg}`}>
            <h1 className="display-1 fw-bold col-12">Comidas para llevar</h1>
            <button type="button" className={`col-12 mt-2 fs-4 rounded-pill btn ${styles.btnOrder}`} >Pedir por WhatsApp</button>
        </header>
    )
}