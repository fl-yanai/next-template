const baseUrls = {
  index: '/',
  about: () => `${baseUrls.index}about/`,
  news: () => `${baseUrls.index}news/`,
  contact: () => `${baseUrls.about()}contact/`,
}

export const APPURLS = {
  index: baseUrls.index,
  about: baseUrls.about(),
  news: baseUrls.news(),
  newsDetail: (id: string) => `${APPURLS.news}${id}/`,
  contact: baseUrls.contact(),
}
