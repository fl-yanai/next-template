const baseUrls = {
  index: '/',
  about: () => `${baseUrls.index}about/`,
  news: () => `${baseUrls.index}news/`,
  contact: () => `${baseUrls.about()}contact/`,
}

export const appUrls = {
  index: baseUrls.index,
  about: baseUrls.about(),
  news: baseUrls.news(),
  newsDetail: (id: string) => `${appUrls.news}${id}/`,
  contact: baseUrls.contact(),
}
