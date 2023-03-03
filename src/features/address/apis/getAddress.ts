import axios from 'axios'
import { apiUrls } from '@/constants/apiUrls'

export const getAddress = async (zipcode: string) => {
  const res = await axios.get(`${apiUrls.zipcloud}${zipcode}`)
  return res.data
}
