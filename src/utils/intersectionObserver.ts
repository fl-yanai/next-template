export const intersectionObserver = (
  targets: NodeListOf<Element>,
  action: () => void,
  options?: { root: Element | null; rootMargin: number; threshold: number },
) => {
  const callback = (entries: any, object: any) => {
    entries.forEach((entry: any) => {
      if (!entry.isIntersecting) return
      action()
      object.unobserve(entry.target)
    })
  }

  const observer: IntersectionObserver = new IntersectionObserver(callback, {
    root: options ? options.root : null,
    rootMargin: options ? `${options.rootMargin}px` : '0px',
    threshold: options ? options.threshold : 0,
  })

  targets.forEach((element: Element) => {
    observer.observe(element)
  })
}
