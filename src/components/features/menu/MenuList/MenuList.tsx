
import { DishCard } from '../DishCard/DishCard'
import { useGetDishes } from '../../../../hooks/useGetDishes'

export function MenuList() {
    const { dishes, loading, error } = useGetDishes()

    return (
        <div className='container py-5'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="row g-5">
                {
                    dishes.filter((dish) => dish.enabled).map(dish => (
                        <div key={dish.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <DishCard dish={dish} />
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
