import { Cart } from "../components/features/cart/Cart/Cart";
import { MenuHeader } from "../components/features/menu/MenuHeader/MenuHeader";
import { MenuList } from "../components/features/menu/MenuList/MenuList";
import styles from './MenuPage.module.css'

export function MenuPage() {
    return (
        <div className=" container-fluid d-flex flex-column mb-5 justify-content-center align-items-center mt-5 gap-4">
            <MenuHeader />
            <MenuList />
            <div className={`position-fixed pb-5 pb-md-0 mb-4 mb-md-0 ${styles.cart}`}>
                <Cart />
            </div>
        </div>
    )
} 