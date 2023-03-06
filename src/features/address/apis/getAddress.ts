import axios from 'axios'
import { APIURLS } from '@/constants/apiUrls'

export const getAddress = async (zipcode: string) => {
  const res = await axios.get(`${APIURLS.zipcloud}${zipcode}`)
  return res.data
}
