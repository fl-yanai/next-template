export const getAddress = async (zipcode: string) => {
  const data = await (
    await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
  ).json()
  return data
}
