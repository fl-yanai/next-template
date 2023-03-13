import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { APPURLS } from '@/constants/appUrls'

interface Props {
  loginRequired?: boolean
  children: React.ReactNode
}

const LayoutAuthCheck: FC<Props> = ({ loginRequired = true, children }) => {
  const router = useRouter()
  const user = ''
  const loading = true

  useEffect(() => {
    if (loading) return
    if (loginRequired) {
      if (user === null) {
        router.push(APPURLS.index)
      }
    } else {
      if (user !== null) {
        router.push('')
      }
    }
  }, [user, loading])

  if (loginRequired) {
    return <>{!loading && <>{user && <>{children}</>}</>}</>
  } else {
    return <>{!loading && <>{user === null && <>{children}</>}</>}</>
  }
}
export default LayoutAuthCheck
