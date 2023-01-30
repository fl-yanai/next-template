import { useEffect } from 'react'
import { useAddress } from '@/features/address/hooks/useAddress'

const Home = () => {
  const { address, loading, errorMessage, searchAddress } = useAddress()
  useEffect(() => {
    searchAddress('5140007')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>{loading ? <p>取得中</p> : <p>{address}</p>}</>
}
export default Home
