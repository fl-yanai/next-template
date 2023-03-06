import { useState } from 'react'
import { getAddress } from '../apis/getAddress'
import { TypeAddress } from '../types/typeAddress'
import { ERRORMESSAGES } from '@/constants/errorMessages'
import { validateAddress, validateBlanck } from '@/utils/validations'

export const useAddress = () => {
  const [address, setAddress] = useState<TypeAddress[]>([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [multipleAddress, setMultipleAddress] = useState(false)

  const initializeData = () => {
    setAddress([])
    setLoading(true)
    setMultipleAddress(false)
    setErrorMessage('')
  }

  const searchAddress = async (zipcode: string) => {
    initializeData()
    if (!validateBlanck(zipcode)) {
      setErrorMessage('郵便番号を入力してください')
    } else if (!validateAddress(zipcode)) {
      setErrorMessage('郵便番号が無効です')
    } else {
      let a: TypeAddress[]
      try {
        const data = await getAddress(zipcode)
        a = data['results']
        if (a.length > 1) {
          setMultipleAddress(true)
        }
        setAddress(a)
      } catch (err) {
        setErrorMessage(ERRORMESSAGES.dataFetch.error)
      }
    }
    setLoading(false)
  }

  return { address, loading, errorMessage, multipleAddress, searchAddress }
}
