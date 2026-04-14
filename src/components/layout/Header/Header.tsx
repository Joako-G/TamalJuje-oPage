import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.ico'
import { Nav } from '../Nav/Nav'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={`container-fluid d-flex align-items-center text-center py-2 ${styles.header}`}>
            <Link to='/' className='d-flex align-items-center gap-3 text-decoration-none text-white'>
                <img src={logo} alt="logo" className={`rounded-circle ${styles.image}`} />
                <h1 className="fs-4 text-start m-0">Tamal Jujeño</h1>
            </Link>

            <div className='d-none d-md-block m-auto'>
                <Nav />
            </div>


        </header>
    )
}