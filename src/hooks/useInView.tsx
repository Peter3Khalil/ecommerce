"use client"
import React from 'react'

type InViewProps = {
  parentRef?: React.RefObject<HTMLElement>
  threshold?: number
  rootMargin?: string
}
const useInView = ({ parentRef, rootMargin, threshold }: InViewProps) => {
  const [visibleElement, setVisibleElement] = React.useState<Element | null>(null)
  React.useEffect(() => {
    const children = Array.from(parentRef?.current?.children || [])
    const observer = new IntersectionObserver(
      (entries) => {
        // entries is an array of observed elements
        entries.forEach((entry) => {
          // entry.isIntersecting is true when the element is visible
          if (entry.isIntersecting) {
            setVisibleElement(entry.target)
          }
        })
      },
      {
        // Define the options for the observer
        root: parentRef?.current || null,
        rootMargin: rootMargin || '0px',
        threshold: threshold || 0.5,
      }
    )

    // Start observing the element
    if (parentRef?.current) {
      children.forEach((child) => {
        observer.observe(child)
      })
    }

    // Cleanup function
    return () => {
      if (parentRef?.current) {
        children.forEach((child) => {
          observer.unobserve(child)
        })
      }
    }
  }, []) // Empty dependency array means this effect runs once when the component mounts

  return { visibleElement }
}

export default useInView
