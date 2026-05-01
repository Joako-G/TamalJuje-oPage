
import { useEffect, useState } from 'react'
import { DishCard } from '../DishCard/DishCard'
import { DishCardSkeleton } from '../DishCardSkeleton/DishCardSkeleton'
import { useGetDishes } from '../../../../hooks/useGetDishes'
import { getAllSides, type ISide } from '../../../../service/sidesService'

export function MenuList() {
    const { dishes, loading, error } = useGetDishes()
    const [allSides, setAllSides] = useState<ISide[]>([])

    // dev: render count (removed heavy debug logs)

    useEffect(() => {
        getAllSides()
            .then(setAllSides)
            .catch(err => console.error('Error fetching sides:', err))
    }, [])

    return (
        <div className='container py-5'>
            {error && <p className="text-danger text-center">Error: {error.message}</p>}
            <div className="row g-5">
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <DishCardSkeleton />
                        </div>
                    ))
                    : dishes.filter((dish) => dish.menu_day).map(dish => (
                        <div key={dish.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
                            <DishCard dish={dish} allSides={allSides} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
