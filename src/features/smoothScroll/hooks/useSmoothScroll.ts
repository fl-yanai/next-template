import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useSmoothScroll = (queryName = 'scrollTo', offset = 0) => {
  const router = useRouter()

  const toScroll = (target: string) => {
    const targetElement: HTMLElement | null = document.getElementById(target)
    if (!targetElement) return
    const targetY: number = targetElement.getBoundingClientRect().top
    let scrollY: number = targetY - offset
    window.scrollBy({
      top: scrollY,
      left: 0,
      behavior: 'smooth',
    })
  }

  const smoothScroll = (scrollTo: string, pageJump?: string) => {
    if (scrollTo === '') return
    if (pageJump !== '') {
      toScroll(scrollTo)
    } else {
      router.push({ pathname: pageJump, query: { [queryName]: scrollTo } })
    }
  }

  useEffect(() => {
    const target = router.query[queryName]
    if (typeof target !== 'string') return
    if (target === '') return
    toScroll(target)
  }, [router, offset, queryName])

  return { smoothScroll }
}
