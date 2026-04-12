import { MenuHeader } from "../components/features/menu/MenuHeader/MenuHeader";
import { MenuList } from "../components/features/menu/MenuList/MenuList";

export function MenuPage() {
    return (
        <div className="container-fluid d-flex flex-column pb-5 justify-content-center mt-5 gap-4">
            <MenuHeader />
            <MenuList />
        </div>
    )
} 