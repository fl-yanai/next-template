export const useFadeInAnimation = (targetclassName?: string, observeredClassName?: string) => {
  const intersectionObserver = (targets: NodeListOf<Element>) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }

    const callback = (entries: any, object: any) => {
      entries.forEach((entry: any) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add(observeredClassName ? observeredClassName : '--TargetPassed')
        object.unobserve(entry.target)
      })
    }

    const observer: IntersectionObserver = new IntersectionObserver(callback, options)

    targets.forEach((element: Element) => {
      observer.observe(element)
    })
  }

  if (typeof document !== 'undefined') {
    const targets = document.querySelectorAll(`.${targetclassName ? targetclassName : '--Target'}`)
    if (targets.length === 0) return
    intersectionObserver(targets)
  }
}
