import { useState } from 'react'
import FormText from '@/components/parts/modules/forms/FormText'
import { useAddress } from '@/features/address/hooks/useAddress'

const Home = () => {
  const { address, loading, error, searchAddress } = useAddress()
  const [zipcode, setZipcode] = useState('7830060')
  return (
    <>
      <FormText
        value={zipcode}
        changeAction={setZipcode}
        label='郵便番号を入力してください'
        htmlFor_id='address'
        error={error}
        errorMessage='エラーが発生しました'
      />
      <button onClick={() => searchAddress(zipcode)}>検索</button>
      <p className='md:font-bold clamp-text-[20,40] clamp-leading-[30,60] clamp-mt-[10,50]'>
        {loading ? '取得中' : <>{address}</>}
      </p>
    </>
  )
}
export default Home
