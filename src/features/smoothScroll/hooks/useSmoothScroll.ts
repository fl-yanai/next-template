import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useSmoothScroll = (queryName = 'scrollTo', offset = 0) => {
  const router = useRouter()

  useEffect(() => {
    const target = router.query[queryName]
    if (typeof target !== 'string') return
    if (target === '') return
    const targetElement: HTMLElement | null = document.getElementById(target)
    if (!targetElement) return
    const targetY: number = targetElement.getBoundingClientRect().top
    let scrollY: number = targetY - offset
    window.scrollBy({
      top: scrollY,
      left: 0,
      behavior: 'smooth',
    })
  }, [router, offset, queryName])
}
