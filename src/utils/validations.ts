export const validateAddress = (address: string) => {
  if (/^[0-9]{7}$/.test(address)) return true
  return false
}
