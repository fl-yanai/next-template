import { useState } from 'react'
import { getAddress } from '../api/getAddress'
import { TypeAddress } from '@/types/typeAddresses'

export const useAddress = () => {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const searchAddress = async (zipcode: string) => {
    setLoading(true)
    let a: TypeAddress
    try {
      a = await getAddress(zipcode)
      setAddress(`${a.results[0].address1}${a.results[0].address2}${a.results[0].address3}`)
    } catch (err) {
      setErrorMessage('connect error')
    }
    setLoading(false)
  }

  return { address, loading, errorMessage, searchAddress }
}
