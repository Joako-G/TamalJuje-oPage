import logo from '../../../assets/logo.ico'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={`d-flex justify-content-center align-items-center text-center py-2 ${styles.header}`}>
            <h1 className="col-10 fs-4 text-start">Tamal Jujeño</h1>
            <img src={logo} alt="logo" className={`col-2 rounded-circle ${styles.image}`} />
        </header>
    )
}