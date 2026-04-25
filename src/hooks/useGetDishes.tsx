import { useEffect, useState } from "react"
import type { IDish } from "../interfaces/IDish"
import { getDishes } from "../service/dishesService"
import { supabase } from "../lib/supabase"

export function useGetDishes() {
    const [dishes, setDishes] = useState<IDish[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        let isMounted = true

        const load = async () => {
            try {
                const data = await getDishes()
                if (isMounted) setDishes(data)
            } catch (err) {
                if (isMounted) setError(err as Error)
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        load()

        const sortByPrice = (arr: IDish[]) => arr.slice().sort((a, b) => a.price - b.price)


        const channel = supabase
            .channel('public:dishes')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'dishes' }, (payload) => {
                if (!isMounted) return
                const p = payload as any
                const hasNew = !!p.new
                const hasOld = !!p.old

                if (hasNew && !hasOld) {
                    // INSERT
                    const newDish = p.new as IDish
                    setDishes(prev => sortByPrice([...prev.filter(d => d.id !== newDish.id), newDish]))
                    return
                }

                if (hasNew && hasOld) {
                    // UPDATE
                    const updated = p.new as IDish
                    setDishes(prev => sortByPrice(prev.map(d => d.id === updated.id ? updated : d)))
                    return
                }

                if (!hasNew && hasOld) {
                    // DELETE
                    const oldDish = p.old as IDish
                    setDishes(prev => prev.filter(d => d.id !== oldDish.id))
                    return
                }
            })
            .subscribe()


        return () => {
            isMounted = false
            try { channel.unsubscribe() } catch (e) { }
            try {
                supabase.removeChannel?.(channel)
            } catch (e) { }
        }
    }, [])

    return { dishes, loading, error }
}