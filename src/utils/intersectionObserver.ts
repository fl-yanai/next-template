export const intersectionObserver = (
  targets: NodeListOf<Element>,
  callback: (entries: any, object: any) => void,
  options?: { root: Element | null; rootMargin: number; threshold: number },
) => {
  const observer: IntersectionObserver = new IntersectionObserver(callback, {
    root: options ? options.root : null,
    rootMargin: options ? `${options.rootMargin}px` : '0px',
    threshold: options ? options.threshold : 0,
  })

  targets.forEach((element: Element) => {
    observer.observe(element)
  })
}
