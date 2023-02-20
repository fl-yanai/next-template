import axios from 'axios'

export const getAddress = async (zipcode: string) => {
  const res = await axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
  return res.data
}
