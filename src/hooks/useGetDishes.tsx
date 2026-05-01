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
        const debounceRef = { current: 0 as number }

        const load = async (showLoading = true) => {
            try {
                if (showLoading) setLoading(true)
                const data = await getDishes()
                if (isMounted) setDishes(data)
            } catch (err) {
                if (isMounted) setError(err as Error)
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        load()

        // debounce helper to coalesce rapid realtime events
        const scheduleRefresh = (delay = 200) => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current)
            }
            debounceRef.current = window.setTimeout(() => {
                load(false)
                debounceRef.current = 0
            }, delay) as unknown as number
        }

        // create a unique channel id per hook instance
        const channelId = `dishes-realtime-${Math.random().toString(36).substring(7)}`
        const channel = supabase
            .channel(channelId)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'dishes' }, () => {
                scheduleRefresh()
            })
            .on('postgres_changes', { event: '*', schema: 'public', table: 'dish_sides' }, () => {
                scheduleRefresh()
            })
            .subscribe()

        return () => {
            isMounted = false
            try { channel.unsubscribe() } catch (e) { }
            try { supabase.removeChannel?.(channel) } catch (e) { }
            if (debounceRef.current) clearTimeout(debounceRef.current)
        }
    }, [])

    return { dishes, loading, error }
}