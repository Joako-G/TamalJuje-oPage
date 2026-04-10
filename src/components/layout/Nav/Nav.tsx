import { BagSvg } from '../../icons/BagSvg'
import { HomeSvg } from '../../icons/HomeSvg'
import { MenuSvg } from '../../icons/MenuSvg'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export function Nav() {
    return (
        <nav className={`d-flex mt-auto p-3  gap-5 justify-content-between align-items-center ${styles.navBar} rounded-top-5`}>
            <NavLink className={({ isActive }) => isActive ? `text-decoration-none m-auto d-flex flex-column justify-content-center align-items-center ${styles.navLinkActive}` : `text-decoration-none m-auto d-flex gap-1 flex-column justify-content-center align-items-center rounded-pill ${styles.items}`} to='/'>
                <HomeSvg />
                Inicio
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? `text-decoration-none m-auto d-flex gap-1 flex-column justify-content-center align-items-center ${styles.navLinkActive}` : `text-decoration-none m-auto d-flex gap-1 flex-column justify-content-center align-items-center ${styles.items}`} to='/menu'>
                <MenuSvg />
                Menu
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? `text-decoration-none m-auto d-flex gap-1 flex-column justify-content-center align-items-center ${styles.iconOutline} ${styles.navLinkActive}` : `text-decoration-none m-auto d-flex gap-1 flex-column justify-content-center align-items-center ${styles.iconOutline} ${styles.items}`} to='/order'>
                <BagSvg />
                Ordenar
            </NavLink>
        </nav >
    )
}