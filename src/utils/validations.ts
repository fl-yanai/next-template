export const validateChecks = (
  checkActions: { target: string | number; actionName: 'blank' | 'address' | 'email' }[],
) => {
  let checks: boolean[] = []
  checkActions.map((action) => {
    switch (action.actionName) {
      case 'email':
        checks.push(validateEmail(action.target as string))
        break
      case 'address':
        checks.push(validateAddress(action.target as string))
        break
      default:
        checks.push(validateBlanck(action.target))
        break
    }
  })
  if (checks.find((check) => check === false) === false) return false
  return true
}

export const validateBlanck = (target: string | number) => {
  switch (typeof target) {
    case 'string':
      if (target !== '') return true
      break
    default:
      if (target !== null) return true
      break
  }
  return false
}

export const validateAddress = (zipcode: string) => {
  if (/^[0-9]{7}$/.test(zipcode)) return true
  return false
}

export const validateEmail = (email: string) => {
  if (/^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(email)) {
    return true
  }
  return false
}
