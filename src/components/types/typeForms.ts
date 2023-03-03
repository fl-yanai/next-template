import { typeInputDefault } from './typeInputs'

export interface typeFormDefault extends typeInputDefault {
  htmlFor_id: string
  label: string
  error?: boolean
  errorMessage?: React.ReactNode
  disabled?: boolean
  required?: boolean
}
