
import type { IDish } from '../../../../interfaces/IDish'
import dataDishes from '../../../../data/dihses.json'
import { DishCard } from '../DishCard/DishCard'

export function MenuList() {
    const dishes = dataDishes.dishes as IDish[]

    return (
        <div className='container py-5'>
            <div className="row g-5 -content-md-center">
                {
                    dishes.map((dish) => (
                        <div key={dish.id} className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
                            <DishCard dish={dish} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}