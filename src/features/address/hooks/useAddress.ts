import { useState } from 'react'
import { getAddress } from '../api/getAddress'
import { TypeAddress } from '@/types/features/address/typeAddresses'

export const useAddress = () => {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const initializeData = () => {
    setLoading(true)
    setError(false)
    setAddress('')
  }

  const searchAddress = async (zipcode: string) => {
    initializeData()
    let a: TypeAddress
    try {
      a = await getAddress(zipcode)
      setAddress(
        `${a.results[0].address1}${a.results[0].address2}${
          a.results[0].address3 ? a.results[0].address3 : ''
        }`,
      )
    } catch (err) {
      setError(true)
    }
    setLoading(false)
  }

  return { address, loading, error, searchAddress }
}
