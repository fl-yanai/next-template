import { TypeInputDefault } from '../inputs/typeInputs'

export interface TypeFormDefault extends TypeInputDefault {
  htmlFor_id: string
  label: string
  error?: boolean
  errorMessage?: React.ReactNode
}
