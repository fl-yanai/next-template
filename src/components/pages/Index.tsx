import { useEffect, useState } from 'react'
import SelectOneValue from '../parts/elements/selects/SelectOneValue'
import FormText from '@/components/parts/modules/forms/FormText'
import { useAddress } from '@/features/address/hooks/useAddress'
import { TypeSelectOptions } from '@/types/components/selects/typeSelects'

const Index = () => {
  const { address, loading, error, multipleAddress, searchAddress } = useAddress()
  const [zipcode, setZipcode] = useState('0380101')
  const [multiSelectAddress, setMultiSelectAddress] = useState('')
  const [multiSelectAddressOptions, setMultiSelectAddressOptions] = useState<TypeSelectOptions[]>(
    [],
  )

  useEffect(() => {
    if (multipleAddress) {
      let o: TypeSelectOptions[] = []
      address.map((item) => {
        o.push({
          value: `${item.address1}${item.address2}${item.address3}`,
          label: `${item.address1}${item.address2}${item.address3}`,
        })
      })
      setMultiSelectAddressOptions(o)
    }
  }, [multipleAddress, address])

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
      <div className='font-bold clamp-text-[12,24] clamp-leading-[16,28]'>
        {loading ? (
          <p>取得中</p>
        ) : (
          <>
            {address.length === 0 && <></>}
            {address.length === 1 && <p>{address[0].address1}</p>}
            {multipleAddress && (
              <div>
                <SelectOneValue
                  value={multiSelectAddress}
                  changeAction={setMultiSelectAddress}
                  name='select address'
                  options={multiSelectAddressOptions}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}
export default Index
