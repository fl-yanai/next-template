import { useRouter } from 'next/router'
import { FC } from 'react'
import { APPURLS } from '@/constants/appUrls'

interface Props {
  children: React.ReactNode
}

const LayoutAuthCheck: FC<Props> = ({ children }) => {
  const router = useRouter()
  const user = ''
  const loading = true

  if (!loading && user === null) {
    router.push(APPURLS.index)
  }

  return <>{!loading && <>{user !== null && <>{children}</>}</>}</>
}
export default LayoutAuthCheck
