import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const elementRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = elementRef.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    
                    observer.unobserve(element)
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px'
            }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [options.threshold, options.rootMargin])

    return { elementRef, isVisible }
}
