import { useState } from 'react'
import { getAddress } from '../api/getAddress'
import { TypeAddress } from '@/types/features/address/typeAddresses'

export const useAddress = () => {
  const [address, setAddress] = useState<TypeAddress[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [multipleAddress, setMultipleAddress] = useState(false)

  const initializeData = () => {
    setAddress([])
    setLoading(true)
    setError(false)
    setMultipleAddress(false)
  }

  const searchAddress = async (zipcode: string) => {
    initializeData()
    let a: TypeAddress[]
    try {
      const data = await getAddress(zipcode)
      a = data['results']
      if (a.length > 1) {
        setMultipleAddress(true)
      }
      setAddress(a)
    } catch (err) {
      setError(true)
    }
    setLoading(false)
  }

  return { address, loading, error, multipleAddress, searchAddress }
}
