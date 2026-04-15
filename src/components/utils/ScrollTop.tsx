import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollTop() {
    // Obtengo la sección en la que esta el usuario
    const { pathname } = useLocation()

    // Cuando cambia de sección el scroll vuelve arriba
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [pathname])

    return null
}