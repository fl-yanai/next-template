import { intersectionObserver } from '@/utils/intersectionObserver'

export const useFadeInAnimation = (targetclassName?: string, observeredClassName?: string) => {
  const callback = (entries: any, object: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add(observeredClassName ? observeredClassName : '--targetPassed')
      object.unobserve(entry.target)
    })
  }

  if (typeof document !== 'undefined') {
    const targets = document.querySelectorAll(`.${targetclassName ? targetclassName : '--target'}`)
    if (targets.length === 0) return
    intersectionObserver(targets, callback)
  }
}
