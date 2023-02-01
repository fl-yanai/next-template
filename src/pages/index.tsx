import { useEffect } from 'react'
import { useAddress } from '@/features/address/hooks/useAddress'

const Home = () => {
  const { address, loading, error, searchAddress } = useAddress()
  useEffect(() => {
    searchAddress('5140007')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {error && <p>エラーが発生しました</p>}
      {loading ? <p>取得中</p> : <p>{address}</p>}
    </>
  )
}
export default Home
