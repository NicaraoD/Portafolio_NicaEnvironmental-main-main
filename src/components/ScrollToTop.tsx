import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo(0, 0)

            setTimeout(() => {
                const nav = document.querySelector('nav')

                if (nav) {
                    nav.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }
            }, 50)
        }
    }, [pathname])

    return null
}
