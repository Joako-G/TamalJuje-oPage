
import type { IDish } from '../../../../interfaces/IDish'
import dataDishes from '../../../../data/dihses.json'
import { DishCard } from '../DishCard/DishCard'

export function MenuList() {
    const dishes = dataDishes.dishes as IDish[]

    return (
        <div className="d-flex flex-column gap-5">
            {
                dishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                ))
            }
        </div>
    )

}