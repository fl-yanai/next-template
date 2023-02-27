import { FC } from 'react'
import InputText from '../../elements/inputs/InputText'
import FormWrapDefault from './FormWrapDefault'
import { TypeFormDefault } from '@/components/types/forms/typeForms'
import { TypeStyleDefault } from '@/components/types/styles/typeStyles'

interface Props extends TypeStyleDefault, TypeFormDefault {
  value: string
  changeAction: (value: string) => void
}

const FormInputText: FC<Props> = ({
  htmlFor_id,
  value,
  changeAction,
  label,
  error,
  errorMessage,
  disabled,
  required,
}) => {
  const wrapProps = { label, error, errorMessage, htmlFor_id, disabled, required }
  const inputProps = { value, changeAction, htmlFor_id, disabled, required }
  return (
    <FormWrapDefault {...wrapProps}>
      <InputText {...inputProps} />
    </FormWrapDefault>
  )
}
export default FormInputText
